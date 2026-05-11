import { motion } from "framer-motion";

const heroImage =
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4";

export default function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <img
        src={heroImage}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-6"
      >

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Aura Dream Photography
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Modern cinematic photography portfolio.
        </p>

      </motion.div>

    </section>
  );
}