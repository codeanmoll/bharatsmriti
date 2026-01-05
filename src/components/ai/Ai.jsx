import React, { useState, useRef, useEffect } from "react";
import "./ai.css";
import { motion, AnimatePresence } from "framer-motion";



const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 40,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};




const renderFormattedText = (text) => {
    const lines = text.split("\n");

    return lines.map((line, index) => {
        // Empty line
        if (!line.trim()) return <br key={index} />;

        // Numbered heading: 1. **Title:**
        if (/^\d+\.\s\*\*(.+?)\*\*/.test(line)) {
            const title = line.match(/^\d+\.\s\*\*(.+?)\*\*/)[1];
            const rest = line.replace(/^\d+\.\s\*\*(.+?)\*\*:?/, "");

            return (
                <div key={index} className="ai-section">
                    <h3 style={{color:"#000"}}>{title}</h3>
                    {rest && <p style={{color:"#000"}}>{rest}</p>}
                </div>
            );
        }

        // Bullet with bold title: * **Something:**
        if (/^\*\s\*\*(.+?)\*\*/.test(line)) {
            const title = line.match(/^\*\s\*\*(.+?)\*\*/)[1];
            const rest = line.replace(/^\*\s\*\*(.+?)\*\*:?/, "");

            return (
                <li key={index}>
                    <strong style={{color:"#000"}}>{title}</strong> {rest}
                </li>
            );
        }

        // Normal bullet
        if (line.trim().startsWith("*")) {
            return <li key={index}>{line.replace("*", "")}</li>;
        }

        // Bold text inside paragraph
        if (line.includes("**")) {
            const parts = line.split(/\*\*(.*?)\*\*/g);
            return (
                <p key={index}>
                    {parts.map((part, i) =>
                        i % 2 === 1 ? <strong  style={{color:"#000",fontSize:18}} key={i}>{part}</strong> : part
                    )}
                </p>
            );
        }

        // Normal paragraph
        return <p key={index}>{line}</p>;
    });
};

const Ai = ({onClose,isOpen}) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    // auto scroll
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        // add user message
        const userMessage = { role: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("http://localhost:5001/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();

            if (data.success) {
                setMessages((prev) => [
                    ...prev,
                    { role: "ai", text: data.reply },
                ]);
            }
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { role: "ai", text: "⚠️ AI server error" },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
           <AnimatePresence>
              {isOpen && (
        <motion.div className="ai"
         variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit">
            <motion.div className="container"  variants={modalVariants}>
                {/* LEFT SIDEBAR */}
                <div className="wrapper">
                    <p className="title">Previous Session</p>
                    <div className="items">
                        <div className="item">
                            <i className="bi bi-clock-history"></i>
                            <span>Session 1</span>
                        </div>
                    </div>
                </div>

                {/* CHAT AREA */}
                <div className="wrapper">
                    <div className="Header">
                        <div className="items">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfY5Qwmih16LGrArB8l1Y_QcLCtX10y7QLA&s"
                                alt=""
                            />
                            <span>Heritage AI</span>
                        </div>
                    </div>

                    {/* CHAT BODY */}
                    <div className="Main">
                        <div className="items">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={msg.role === "user" ? "reciever" : "sender"}
                                >
                                    <div className="wrapped">
                                        <p>{msg.role === "ai"
                                            ? renderFormattedText(msg.text)
                                            : <p>{msg.text}</p>
                                        }</p>
                                    </div>
                                </div>
                            ))}

                            {loading && (
                                <div className="sender">
                                    <div className="wrapped">
                                        <p>Thinking...</p>
                                    </div>
                                </div>
                            )}

                            <div ref={chatEndRef}></div>
                        </div>
                    </div>

                    {/* INPUT */}
                    <div className="Footer">
                        <div className="items">
                            <input
                                type="text"
                                placeholder="Prompt Here..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            />
                            <button onClick={sendMessage}>Ask!</button>
                        </div>
                    </div>
                </div>
            </motion.div>
            <button onClick={onClose} style={{position:"absolute",top:0,right:0,margin:12,color:"#FFF",fontSize:32}} className="bi bi-x-lg"></button>
        </motion.div>

           )}
            </AnimatePresence>
    );
};

export default Ai;
