import { useEffect, useState } from "react";
import { getJournalMedia, uploadMedia, deleteMedia } from "../../api/media";
import { Camera } from "lucide-react"; // camera icon
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const GalleryTab = ({ journalId }) => {
  const [mediaList, setMediaList] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMedia = async () => {
    try {
      const media = await getJournalMedia(journalId);
      setMediaList(media);
    } catch (err) {
      console.error("Error loading media", err);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    try {
      setLoading(true);
      await uploadMedia(selectedFile, journalId);
      setSelectedFile(null);
      await fetchMedia();
    } catch (err) {
      console.error("Error uploading", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );
    if (!confirmDelete) return;

    try {
      await deleteMedia(id);
      setMediaList((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, [journalId]);

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="media-upload"
          className="flex items-center gap-2 cursor-pointer bg-gray-100 border border-dashed border-gray-400 hover:bg-gray-200 px-4 py-2 rounded-xl transition"
        >
          <Camera className="w-5 h-5 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">
            {selectedFile ? selectedFile.name : "Select Image"}
          </span>
        </label>
        <input
          id="media-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        <button
          onClick={handleUpload}
          disabled={loading || !selectedFile}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-xl disabled:opacity-50 transition"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mediaList.map((media) => (
          <div
            key={media._id}
            className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={`${baseUrl}${media.url}`}
              alt="media"
              className="object-cover w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
            />
            <button
              onClick={() => handleDelete(media._id)}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
              title="Delete"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryTab;
