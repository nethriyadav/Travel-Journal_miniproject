import React from "react";
import { Link } from "react-router-dom";

function JourneyNavigation({ nextJournal }) {
  if (!nextJournal) return null; // Don't show anything if there's no next journey

  return (
    <div className="flex justify-end mb-16">
      <Link to={`/journey-details/${nextJournal._id}`}>
        <button className="flex gap-4 items-center px-4 py-3 text-sm font-medium rounded-2xl cursor-pointer text-slate-700">
          <span>Next Journey</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-icon"
          >
            <path
              d="M3.33337 8H12.6667"
              stroke="#344256"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 3.33325L12.6667 7.99992L8 12.6666"
              stroke="#344256"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default JourneyNavigation;





















// import React from "react";
// import { Link } from "react-router-dom";

// function JourneyNavigation() {
//   return (
//     <div className="flex justify-end mb-16">
//       <Link to="/journey-details">
//       <button className="flex gap-4 items-center px-4 py-3 text-sm font-medium rounded-2xl cursor-pointer text-slate-700">
//         <span>Next Journey</span>
//         <svg
//           width="16"
//           height="16"
//           viewBox="0 0 16 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="arrow-icon"
//         >
//           <path
//             d="M3.33337 8H12.6667"
//             stroke="#344256"
//             strokeWidth="1.33333"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M8 3.33325L12.6667 7.99992L8 12.6666"
//             stroke="#344256"
//             strokeWidth="1.33333"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </button>
//       </Link>
//     </div>
//   );
// }

// export default JourneyNavigation;
