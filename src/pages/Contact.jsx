export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">

      <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16">

        <h1 className="text-5xl font-bold mb-10 text-center">
          Contact
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 outline-none"
          ></textarea>

          <button className="w-full bg-white text-black py-5 rounded-2xl font-semibold">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}