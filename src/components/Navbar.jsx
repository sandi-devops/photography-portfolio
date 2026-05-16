import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black/70 backdrop-blur-lg border-b border-white/10 fixed top-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* TITLE */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Aura Dream Photography
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-6 text-sm md:text-base">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>

          {/* LOGIN BUTTON */}
          <Link
            to="/admin-login"
            className="bg-white text-black px-4 py-2 rounded-full hover:scale-105 transition"
          >
            ADMIN Login
          </Link>

        </div>

      </div>

    </nav>
  );
}