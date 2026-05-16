import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    const res = await api.post("/login", {
      email,
      password
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("role", res.data.role);

    if (res.data.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/gallery");
    }
  };

  return (
    <div className="text-white p-10">
      <form onSubmit={login} className="space-y-4">
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 w-full bg-zinc-800"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 w-full bg-zinc-800"
        />

        <button className="bg-blue-500 px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
}