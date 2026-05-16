import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", {
        email,
        password,
      });

      console.log(res.data);

      if (res.data.role !== "admin") {
        alert("Not admin account");
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      navigate("/admin");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black pt-24">
      <form
        onSubmit={login}
        className="bg-zinc-900 p-8 rounded-xl w-full max-w-md space-y-4 relative z-50"
      >
        <h1 className="text-white text-3xl text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 w-full rounded bg-white text-black"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 w-full rounded bg-white text-black"
        />

        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 w-full py-3 rounded text-white"
        >
          Admin Login
        </button>
      </form>
    </div>
  );
}