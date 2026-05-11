import { useNavigate } from "react-router-dom";
import { galleryData } from "../data/galleryData";

export default function Gallery() {
  const nav = useNavigate();

  return (
    <div className="p-10">

      <h1 className="text-4xl mb-10">Photo Store</h1>

      <div className="grid md:grid-cols-3 gap-6">

        {galleryData.map((item) => (
          <div
            key={item.id}
            onClick={() => nav(`/photo/${item.id}`)}
            className="bg-white/5 rounded-2xl overflow-hidden cursor-pointer"
          >

            <img
              src={item.image}
              className="h-[300px] w-full object-cover"
            />

            <div className="p-4">

              <h2 className="text-lg">{item.title}</h2>

              <p className="text-green-400 font-bold">
                {item.price}
              </p>

              <button className="mt-2 text-sm text-gray-400">
                View Details →
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}