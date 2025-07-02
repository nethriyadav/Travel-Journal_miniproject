import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react"; // Optional: use Lucide or just a text 'X'

function PhotoCard({ title, imageUrl, journalId, mediaId, onDelete }) {
  return (
    <div className="relative group">
      {/* X Delete Button */}
      <button
        onClick={(e) => {
          e.preventDefault(); // Prevent navigating when clicking X
          onDelete(mediaId);
        }}
        className="absolute top-2 right-2 z-10 p-1 bg-white bg-opacity-70 rounded-full shadow hover:bg-red-500 hover:text-white transition-all group"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Image links to journal details */}
      <Link to={`/journey-details/${journalId}`}>
        <article className="box-border p-px m-0 rounded-2xl border border-solid shadow-md backdrop-blur-[6px] bg-white bg-opacity-80 border-white border-opacity-30 h-[395px] w-[395px] max-md:w-full max-md:h-auto">
          <img
            src={imageUrl}
            className="box-border object-cover p-0 m-0 rounded-2xl h-[393px] w-[393px] max-md:w-full max-md:h-auto"
            alt={title}
          />
        </article>
      </Link>
    </div>
  );
}

export default PhotoCard;






















// import React from "react";
// import { Link } from "react-router-dom";
// function PhotoCard({ title, imageUrl ,journalId}) {
//   return (
//     <Link to={`/journey-details/${journalId}`}>
//       <article className="box-border p-px m-0 rounded-2xl border border-solid shadow-md backdrop-blur-[6px] bg-white bg-opacity-80 border-white border-opacity-30 h-[395px] w-[395px] max-md:w-full max-md:h-auto">
//         <img
//           src={imageUrl}
//           className="box-border object-cover p-0 m-0 rounded-2xl h-[393px] w-[393px] max-md:w-full max-md:h-auto"
//           alt={title}
//         />
//       </article>
//     </Link>
//   );
// }

// export default PhotoCard;
