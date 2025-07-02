
export default function JourneyTabs({ activeTab, setActiveTab }) {
  const tabs = ["Details", "Map", "Media","Reviews"];

  return (
    <nav className="mb-8 rounded-2xl bg-slate-100">
      <ul className="flex gap-4 p-1 max-sm:flex-wrap">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`px-0 py-2 text-sm text-center cursor-pointer text-slate-600 w-[296px] max-sm:grow max-sm:w-auto ${
              activeTab === tab ? "bg-white rounded-xl shadow-sm" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
}






















// "use client";
// import React, { useState } from "react";

// function JourneyTabs() {
//   const [activeTab, setActiveTab] = useState("Details");
//   const tabs = ["Details", "Map", "Related"];

//   return (
//     <nav className="mb-16 rounded-2xl bg-slate-100">
//       <ul className="flex gap-4 p-1 max-sm:flex-wrap">
//         {tabs.map((tab) => (
//           <li
//             key={tab}
//             className={`px-0 py-2 text-sm text-center cursor-pointer text-slate-600 w-[296px] max-sm:grow max-sm:w-auto ${
//               activeTab === tab ? "bg-white rounded-xl shadow-sm" : ""
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default JourneyTabs;
