"use client";
import * as React from "react";
import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import FilterControls from "./FilterControls";
import MapView from "./MapView";
import JourneyEntries from "./JourneyEntries";
import BottomNavigation from "../BottomNavigation";
import { UserContext } from "../../context/UserContext";

export default function JourneyMap() {
  const { user } = useContext(UserContext);
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    if (user?.data?.journals) {
      setJournals(user.data.journals);
    }
  }, [user]);

  const handleDelete = (deletedId) => {
    setJournals((prev) => prev.filter((journal) => journal._id !== deletedId));
  };

  return (
    <main className="flex flex-col bg-[linear-gradient(0deg,#F9FAFB_0%,#F9FAFB_100%),#FFF] min-h-screen pb-16 pt-10">
      
      <section className="flex flex-col px-64 py-10 max-md:px-10 max-sm:px-5 ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-medium leading-9 text-slate-700 text-opacity-90">
            Your Journey
          </h1>
          <FilterControls />
        </div>

        <MapView journals={journals} />
        <JourneyEntries entries={journals} onDelete={handleDelete} />
      </section>
      <BottomNavigation />
    </main>
  );
}




















// "use client";
// import * as React from "react";
// import { useState,useEffect } from "react";
// import Header from "./Header";
// import FilterControls from "./FilterControls";
// import MapView from "./MapView";
// import JourneyEntries from "./JourneyEntries";
// import BottomNavigation from "../BottomNavigation";
// import { getAllJourneys } from "../../api/journeyDetail";


// function JourneyMap() {
//   const [journals, setJournals] = useState([]);

//   useEffect(() => {
//     const fetchJournals = async () => {
//       const data = await getAllJourneys();
//       setJournals(data);
//     };
//     fetchJournals();
//   }, []);

//   return (
//     <main className="flex flex-col bg-[linear-gradient(0deg,#F9FAFB_0%,#F9FAFB_100%),#FFF] min-h-screen pb-16">
    
//       <section className="flex flex-col px-64 py-10 max-md:px-10 max-sm:px-5 ">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-medium leading-9 text-slate-700 text-opacity-90">
//             Your Journey
//           </h1>
//           <FilterControls />
//         </div>
//         <MapView journals={journals} />
//         <JourneyEntries  entries={journals}/>
//       </section>
//       <BottomNavigation />
//     </main>
//   );
// }

// export default JourneyMap;
