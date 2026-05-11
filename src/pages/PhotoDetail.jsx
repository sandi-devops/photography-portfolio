import { useParams, useNavigate } from "react-router-dom";
import { galleryData } from "../data/galleryData";

export default function PhotoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const photo = galleryData.find((p) => String(p.id) === id);
  const isUser = localStorage.getItem("user");

  if (!photo) {
    return <div className="text-white p-10">Photo not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <button
        onClick={() => navigate(-1)}
        className="mb-10 bg-white text-black px-5 py-2 rounded-full"
      >
        ← Back
      </button>

      <div className="max-w-5xl mx-auto">

        <img
          src={photo.image}
          className="w-full rounded-3xl shadow-2xl"
        />

        <h1 className="text-4xl font-bold mt-6">
          {photo.title}
        </h1>

        <p className="text-gray-300 mt-3">
          {photo.story}
        </p>

        <div className="mt-6">
          <span className="text-green-400 text-2xl font-bold">
            {photo.price}
          </span>
        </div>

        <button
          className="mt-6 bg-white text-black px-6 py-3 rounded-xl"
          onClick={() => alert("This is demo only (no payment system)")}
        >
          Buy Photo
        </button>

        {isUser && (
          <a
            href={photo.image}
            download
            className="block mt-4 text-blue-400"
          >
            Download High Quality
          </a>
        )}

      </div>
    </div>
  );
}