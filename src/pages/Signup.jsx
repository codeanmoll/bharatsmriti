import React from 'react'
import "./styles/Signup.css"
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const Signup = () => {
   const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const handleSignup = async () => {
    if (!username || !email || !password) {
      setMsg("All fields required");
      return;
    }


    setLoading(true);
    setMsg("");


    try {
      const res = await fetch("http://localhost/backend/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usernameProps: username,
          emailProps: email,
          passProps: password,
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
                    <h2>Sign up</h2>

                    <div class="input-group">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div class="input-group">
                        <input type="text" placeholder="Username"  value={username}  onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div class="input-group">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
  {msg && <p className="error">{msg}</p>}
                    <button onClick={handleSignup} disabled={loading} class="login-btn">{loading ? "Signing up..." : "SIGNUP"}</button>
                    <div class="links">
                        <NavLink to="/login"><div class="account_exists">Already have an account? Login</div></NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Signup

