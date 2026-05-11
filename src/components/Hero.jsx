import { motion } from "framer-motion";

const hero =
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4";

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center">

      <img
        src={hero}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-6xl font-bold mb-6">
          Capture Beautiful Moments
        </h1>

        <p className="text-xl max-w-2xl mx-auto">
          Professional photography portfolio with
          modern cinematic design.
        </p>

      </motion.div>
    </section>
  );
}