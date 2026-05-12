import { useEffect, useState } from "react";

export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // STATES FOR EDIT MODE
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // STATES FOR CREATE MODE
  const [showCreate, setShowCreate] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://127.0.0.1:8000/api/projects");
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data = await res.json();
      console.log("Projects loaded:", data);
      setProjects(data);
      setError("");
    } catch (err) {
      setError("Error loading projects: " + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    
    try {
      setLoading(true);
      const res = await fetch(`http://127.0.0.1:8000/api/projects/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete project");
      }

      setSuccess("Project deleted successfully!");
      setTimeout(() => setSuccess(""), 3000);
      fetchProjects();
    } catch (err) {
      setError("Error deleting project: " + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateProject = async (id) => {
    if (!title.trim() || !description.trim()) {
      setError("Title and description are required");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("_method", "PUT");
      formData.append("title", title);
      formData.append("description", description);

      if (image) {
        formData.append("image", image);
      }

      const res = await fetch(
        `http://127.0.0.1:8000/api/projects/${id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update project");
      }

      setSuccess("Project updated successfully!");
      setTimeout(() => setSuccess(""), 3000);
      setEditingId(null);
      setTitle("");
      setDescription("");
      setImage(null);
      setError("");
      fetchProjects();
    } catch (err) {
      setError("Error updating project: " + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const createProject = async () => {
    if (!newTitle.trim() || !newDescription.trim()) {
      setError("Title and description are required");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("title", newTitle);
      formData.append("description", newDescription);

      if (newImage) {
        formData.append("image", newImage);
      }

      const res = await fetch("http://127.0.0.1:8000/api/projects", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to create project");
      }

      setSuccess("Project created successfully!");
      setTimeout(() => setSuccess(""), 3000);
      setShowCreate(false);
      setNewTitle("");
      setNewDescription("");
      setNewImage(null);
      setError("");
      fetchProjects();
    } catch (err) {
      setError("Error creating project: " + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">📸 Admin Dashboard</h1>

      {/* ERROR MESSAGE */}
      {error && (
        <div className="mb-5 p-4 bg-red-900 border border-red-600 rounded text-red-200">
          ❌ {error}
          <button
            onClick={() => setError("")}
            className="ml-3 text-sm underline"
          >
            Close
          </button>
        </div>
      )}

      {/* SUCCESS MESSAGE */}
      {success && (
        <div className="mb-5 p-4 bg-green-900 border border-green-600 rounded text-green-200">
          ✅ {success}
        </div>
      )}

      {/* CREATE PROJECT FORM */}
      <div className="mb-10">
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="bg-green-600 px-6 py-3 rounded font-semibold text-lg"
        >
          {showCreate ? "Cancel" : "+ Create New Project"}
        </button>

        {showCreate && (
          <div className="mt-5 space-y-3 bg-zinc-900 p-8 rounded-lg border-2 border-green-600">
            <h2 className="text-2xl font-bold mb-5">Create New Project</h2>

            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full p-3 bg-zinc-800 text-white rounded border border-zinc-700"
              placeholder="Project Title"
              required
            />

            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full p-3 bg-zinc-800 text-white rounded border border-zinc-700 min-h-24"
              placeholder="Project Description"
              required
            />

            <div className="p-3 bg-zinc-800 rounded border border-zinc-700">
              <label className="block text-sm font-semibold mb-2">📁 Upload Image</label>
              <input
                type="file"
                onChange={(e) => setNewImage(e.target.files[0])}
                className="w-full p-2 bg-zinc-700 text-white rounded"
                accept="image/*"
              />
              {newImage && <p className="text-green-400 text-sm mt-2">✅ {newImage.name}</p>}
            </div>

            <button
              onClick={createProject}
              disabled={loading}
              className="w-full bg-green-600 px-4 py-3 text-black rounded font-semibold disabled:opacity-50 text-lg"
            >
              {loading ? "Creating..." : "Create Project"}
            </button>
          </div>
        )}
      </div>

      {/* EDIT FORM */}
      {editingId && (
        <div className="mb-10 space-y-3 bg-zinc-900 p-8 rounded-lg border-2 border-blue-600">
          <h2 className="text-2xl font-bold mb-5">Edit Project</h2>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 bg-zinc-800 text-white rounded border border-zinc-700"
            placeholder="Title"
            required
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 bg-zinc-800 text-white rounded border border-zinc-700 min-h-24"
            placeholder="Description"
            required
          />

          <div className="p-3 bg-zinc-800 rounded border border-zinc-700">
            <label className="block text-sm font-semibold mb-2">📁 Upload New Image (Optional)</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full p-2 bg-zinc-700 text-white rounded"
              accept="image/*"
            />
            {image && <p className="text-green-400 text-sm mt-2">✅ {image.name}</p>}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => updateProject(editingId)}
              disabled={loading}
              className="flex-1 bg-yellow-500 px-4 py-3 text-black rounded font-semibold disabled:opacity-50 text-lg"
            >
              {loading ? "Updating..." : "Update Project"}
            </button>
            <button
              onClick={() => {
                setEditingId(null);
                setTitle("");
                setDescription("");
                setImage(null);
              }}
              className="flex-1 bg-gray-600 px-4 py-3 rounded font-semibold text-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* PROJECTS LIST */}
      <h2 className="text-2xl font-bold mb-5">All Projects ({projects.length})</h2>
      
      {loading && projects.length === 0 && (
        <div className="text-center text-gray-400">Loading projects...</div>
      )}

      {projects.length === 0 && !loading && (
        <div className="text-center text-gray-400 text-lg">No projects yet. Create one! 🎨</div>
      )}

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition"
          >
            <div className="flex gap-6">
              {/* IMAGE */}
              <div className="w-40 h-40 flex-shrink-0">
                {project.image ? (
                  <img
                    src={`http://127.0.0.1:8000/storage/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover rounded"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/160";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-800 rounded flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <p className="text-xs text-gray-500">ID: {project.id}</p>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-2 flex-col justify-center">
                <button
                  onClick={() => {
                    setEditingId(project.id);
                    setTitle(project.title);
                    setDescription(project.description);
                    setImage(null);
                  }}
                  disabled={loading || editingId}
                  className="bg-blue-600 px-4 py-2 rounded font-semibold disabled:opacity-50 whitespace-nowrap"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProject(project.id)}
                  disabled={loading}
                  className="bg-red-600 px-4 py-2 rounded font-semibold disabled:opacity-50 whitespace-nowrap"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}