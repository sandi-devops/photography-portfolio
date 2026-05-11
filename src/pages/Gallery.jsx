import { useNavigate } from "react-router-dom";
import { galleryData } from "../data/galleryData";

export default function Gallery() {
  const navigate = useNavigate();

  const isUser = localStorage.getItem("user");

  return (
    <div className="max-w-7xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-bold mb-14">
        Gallery
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {galleryData.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/photo/${item.id}`)}
            className="cursor-pointer overflow-hidden rounded-3xl group"
          >

            <img
              src={item.image}
              alt={item.title}
              className="h-[400px] w-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* PRICE (only if logged in) */}
            {isUser && (
              <div className="p-3 text-green-400 font-bold">
                {item.price}
              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}