import React, { useState } from "react";
import { deleteJourney } from "../../api/journeyDetail";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

function JourneyEntryCard({ location, description, id, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this journal?");
    if (!confirmDelete) return;

    try {
      setIsDeleting(true);
      await deleteJourney(id);
      toast.success("Journal deleted successfully!");
      if (typeof onDelete === "function") {
        onDelete(id);
      }
      
    } catch (err) {
      console.log(err);
      // alert("Error deleting journal.");
      toast.error("Failed to delete the journal.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <article className="relative flex flex-col p-4 bg-white rounded-2xl border shadow-sm border-slate-200">
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 disabled:opacity-50"
        title="Delete entry"
      >
        <Trash2 size={18} />
      </button>

      <h3 className="mb-1 text-base font-medium text-slate-700">{location}</h3>
      <p className="mb-3 text-sm text-slate-600">{description}</p>
      <a href={`/journey-details/${id}`} className="text-sm text-blue-600">
        View entry
      </a>
    </article>
  );
}

export default JourneyEntryCard;















// import React from "react";

// function JourneyEntryCard({ location, description ,id}) {
//   return (
//     <article className="flex flex-col p-4 bg-white rounded-2xl border shadow-sm border-slate-200">
//       <h3 className="mb-1 text-base font-medium text-slate-700">{location}</h3>
//       <p className="mb-3 text-sm text-slate-600">{description}</p>
//       <a href={`/journey-details/${id}`} className="text-sm text-blue-600">
//         View entry
//       </a>
//     </article>
//   );
// }

// export default JourneyEntryCard;
