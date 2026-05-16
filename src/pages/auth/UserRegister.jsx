import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function UserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    await api.post("/register", {
      name,
      email,
      password,
      password_confirmation: password
    });

    alert("Registered successfully");
    navigate("/login");
  };

  return (
    <div className="text-white p-10">
      <form onSubmit={register} className="space-y-4">
        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="p-2 w-full bg-zinc-800"
        />

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

        <button className="bg-green-500 px-4 py-2">
          Register
        </button>
      </form>
    </div>
  );
}