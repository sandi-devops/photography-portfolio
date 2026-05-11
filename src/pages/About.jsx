export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-bold mb-10">
        About Me
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
          alt="profile"
          className="rounded-3xl h-[500px] object-cover w-full"
        />

        <div>
          <p className="text-lg text-gray-300 leading-8">
            Professional photographer focused on portrait,
            travel, cinematic and storytelling photography.
          </p>
        </div>

      </div>

    </div>
  );
}