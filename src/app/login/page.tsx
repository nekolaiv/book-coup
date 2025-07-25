"use client";

import { useState } from "react";
import {jwtDecode} from 'jwt-decode';
import { useAuth } from "@/contexts/authcontext";
import { useRole } from "@/contexts/role-context"

interface TokenPayload {
  username: string;
  role: "admin" | "user";
  exp: number;
}

export default function LoginPage() {
  const { setUser } = useAuth();
  const { setRole } = useRole();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        setMessage("Log In Successful");

        const decoded = jwtDecode<TokenPayload>(data.token);
        setUser( { username: decoded.username, role: decoded.role} );
        setRole(decoded.role);
        
      } else {
        setMessage(data.message || "Login Failed");
      }
    } catch (err) {
      setMessage("An Error Occured.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2></h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>{loading ? "Loggingg in..." : "login"}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
