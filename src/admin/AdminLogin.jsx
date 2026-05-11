import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();

  const login = () => {
    if (user === "admin" && pass === "1234") {
      localStorage.setItem("auth", "true");
      nav("/admin");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-white/10 p-8 rounded-2xl w-[350px]">

        <h1 className="text-2xl mb-5">Login</h1>

        <input
          placeholder="Username"
          className="w-full p-3 mb-3 text-black"
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 text-black"
          onChange={(e) => setPass(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-white text-black py-3 rounded-xl"
        >
          Login
        </button>

      </div>

    </div>
  );
}