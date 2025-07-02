"use client";
import React, { useEffect, useState } from "react";
import { getLikedJournals } from "../../api/likes";
import { useNavigate } from "react-router-dom";

function LikedJournals() {
  const [liked, setLiked] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const data = await getLikedJournals();
        setLiked(data);
      } catch (err) {
        console.error("Failed to fetch liked journals", err);
      }
    };

    fetchLikes();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {liked.length === 0 ? (
        <p className="text-center text-gray-500 w-full">No liked journals yet.</p>
      ) : (
        liked.map((journal) => (
          <article
            key={journal._id}
            className="flex flex-col p-4 bg-white rounded-2xl border shadow-sm border-slate-200"
          >
            <h3 className="mb-1 text-base font-medium text-slate-700">
              {journal.location?.name || "Unknown Location"}
            </h3>
            <p className="mb-3 text-sm text-slate-600">{journal.title}</p>
            <a
              href={`/journey-details/${journal._id}`}
              className="text-sm text-blue-600"
            >
              View entry
            </a>
          </article>
        ))
      )}
    </div>
  );
}

export default LikedJournals;





















// "use client";
// import React, { useEffect, useState } from "react";
// import { getLikedJournals } from "../../api/likes";
// import { useNavigate } from "react-router-dom";

// function LikedJournals() {
//   const [liked, setLiked] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLikes = async () => {
//       try {
//         const data = await getLikedJournals();
//         setLiked(data);
//       } catch (err) {
//         console.error("Failed to fetch liked journals", err);
//       }
//     };

//     fetchLikes();
//   }, []);


//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
//       {liked.length === 0 ? (
//         <p className="text-center text-gray-500 w-full">No liked journals yet.</p>
//       ) : (
//         liked.map((journal) => (
//           <div
//             key={journal._id}
//             className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between"
//           >
//             <div>
//               <h3 className="text-lg font-semibold mb-2">{journal.title}</h3>
//               <p className="text-sm text-gray-600">{journal.location.name}</p>
//             </div>
//             <button
//               onClick={() => navigate(`/journey-details/${journal._id}`)}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
//             >
//               View Entry
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default LikedJournals;





























