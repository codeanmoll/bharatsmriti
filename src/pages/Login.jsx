import React from 'react'
import "./styles/Login.css"
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const Login = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const handleSignup = async () => {
        if (!username || !password) {
            setMsg("All fields required");
            return;
        }


        setLoading(true);
        setMsg("");


        try {
            const res = await fetch("http://172.29.40.209/backend/login.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                  credentials: "include",
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const data = await res.json();
            setMsg(data.message);
            console.log("data", data);

            if (data.success) {
                setUsername("");
                setEmail("");
                setPassword("");
            }
        } catch (err) {
            setMsg("Server error");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            <div class="login-card">
                <div class="login-left">
                    <div class="illustration">
                        <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="User" />
                    </div>
                </div>

                <div class="login-right">
                    <h2>Member Login</h2>

                    <div class="input-group">
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div class="input-group">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {msg && <p className="error">{msg}</p>}
                    <button onClick={handleSignup} disabled={loading} class="login-btn">{loading ? "Signing up..." : "SIGNUP"}</button>
                    <div class="links">
                        <div class="forgot">Forgot Username / Password?</div>
                        <NavLink to="/signup"><div class="sign_up">Don't have account? Sign up</div></NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Login

