export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-bold mb-14">
        Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Portrait
          </h2>

          <p className="text-gray-400">
            Professional portrait photography.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Wedding
          </h2>

          <p className="text-gray-400">
            Cinematic wedding photography.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Travel
          </h2>

          <p className="text-gray-400">
            Travel and landscape photography.
          </p>
        </div>

      </div>

    </div>
  );
}