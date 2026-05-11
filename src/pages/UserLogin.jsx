import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  const login = () => {
    if (email.length > 3) {
      localStorage.setItem("user", "true");
      nav("/gallery");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-white/10 p-10 rounded-2xl w-[350px]">

        <h1 className="text-2xl mb-6">Customer Login</h1>

        <input
          placeholder="Email"
          className="w-full p-3 mb-4 text-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-white text-black py-3 rounded-xl"
        >
          Enter Gallery
        </button>

      </div>

    </div>
  );
}