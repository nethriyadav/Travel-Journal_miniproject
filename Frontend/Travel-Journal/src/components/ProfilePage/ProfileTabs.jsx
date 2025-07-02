"use client";
import React from "react";

function ProfileTabs({ activeTab, setActiveTab }) {
  return (
    <nav className="flex w-full h-10 rounded-2xl bg-slate-100">
      <button
        className={`m-1 h-8 text-sm rounded-xl ${
          activeTab === "stats"
            ? "bg-gray-50 shadow-sm text-slate-700"
            : "text-slate-600"
        } w-[403px]`}
        onClick={() => setActiveTab("stats")}
      >
        Stats
      </button>
      <button
        className={`flex-1 text-sm ${
          activeTab === "badges"
            ? "bg-gray-50 shadow-sm text-slate-700"
            : "text-slate-600"
        }`}
        onClick={() => setActiveTab("badges")}
      >
        Liked Journals
      </button>
      <button
        className={`flex-1 text-sm ${
          activeTab === "about"
            ? "bg-gray-50 shadow-sm text-slate-700"
            : "text-slate-600"
        }`}
        onClick={() => setActiveTab("about")}
      >
        User Insights
      </button>
    </nav>
  );
}

export default ProfileTabs;





















// "use client";
// import React, { useState } from "react";

// function ProfileTabs() {
//   const [activeTab, setActiveTab] = useState("stats");

//   return (
//     <nav className="flex w-full h-10 rounded-2xl bg-slate-100">
//       <button
//         className={`m-1 h-8 text-sm rounded-xl ${
//           activeTab === "stats"
//             ? "bg-gray-50 shadow-sm text-slate-700"
//             : "text-slate-600"
//         } w-[403px]`}
//         onClick={() => setActiveTab("stats")}
//         aria-selected={activeTab === "stats"}
//         role="tab"
//       >
//         Stats
//       </button>
//       <button
//         className={`flex-1 text-sm ${
//           activeTab === "badges"
//             ? "bg-gray-50 shadow-sm text-slate-700"
//             : "text-slate-600"
//         }`}
//         onClick={() => setActiveTab("badges")}
//         aria-selected={activeTab === "badges"}
//         role="tab"
//       >
//         Liked Journals
//       </button>
//       <button
//         className={`flex-1 text-sm ${
//           activeTab === "about"
//             ? "bg-gray-50 shadow-sm text-slate-700"
//             : "text-slate-600"
//         }`}
//         onClick={() => setActiveTab("about")}
//         aria-selected={activeTab === "about"}
//         role="tab"
//       >
//         About
//       </button>
//     </nav>
//   );
// }

// export default ProfileTabs;
