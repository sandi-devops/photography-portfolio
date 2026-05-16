import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Gallery() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  const isUser = localStorage.getItem("user");

  useEffect(() => {
    api.get("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-bold mb-14">
        Gallery
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/photo/${item.id}`)}
            className="cursor-pointer overflow-hidden rounded-3xl group"
          >

            <img
              src={`http://127.0.0.1:8000/storage/${item.image}`}
              alt={item.title}
              className="h-[400px] w-full object-cover group-hover:scale-110 transition duration-700"
            />

            {isUser && (
              <div className="p-3 text-green-400 font-bold">
                {/* optional price later */}
              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}