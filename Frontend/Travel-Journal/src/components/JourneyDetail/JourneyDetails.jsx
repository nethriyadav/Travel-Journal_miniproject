import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JourneyHeader from "./JourneyHeader";
import JourneyNavigation from "./JourneyNavigation";
import JourneyTabs from "./JourneyTabs";
import JourneyContent from "./JourneyContent";
import JourneyCallToAction from "./JourneyCallToAction";
import BottomNavigation from "../BottomNavigation";
import MapView from "./MapView"; // 👈 import your MapView component
import { getJourneyDetail } from "../../api/journeyDetail";
import { getAllJourneys } from "../../api/journeyDetail";
import GalleryTab from "./GalleryTab";
import ReviewTab from "./ReviewTab";

function JourneyDetails() {
  const { id } = useParams();
  const [journal, setJournal] = useState(null);
  const [allJournals, setAllJournals] = useState([]);
  const [activeTab, setActiveTab] = useState("Details");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getJourneyDetail(id);
        setJournal(data);
        const all = await getAllJourneys();
        setAllJournals(all);
      } catch (err) {
        console.error("Failed to load journey:", err);
      }
    };

    fetchData();
  }, [id]);

  if (!journal) return <p className="p-6">Loading...</p>;
  const currentIndex = allJournals.findIndex((j) => j._id === id);
  const nextJournal = allJournals[currentIndex + 1];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="px-4 py-12 mx-auto my-0 max-w-4xl max-md:px-4 max-md:py-8 max-sm:px-3 max-sm:py-6">
        <JourneyNavigation  nextJournal={nextJournal} />
        <JourneyTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Show content based on tab */}
        {activeTab === "Details" && <JourneyContent journal={journal} />}
        {activeTab === "Map" && <MapView journal={journal} />}
        {activeTab === "Media" && <GalleryTab journalId={journal._id} />}
        {activeTab === "Reviews" && <ReviewTab journalId={journal._id} />}
        <hr className="mx-0 my-12 h-px bg-slate-200" />
        <JourneyCallToAction />
      </main>
      <BottomNavigation />
    </div>
  );
}

export default JourneyDetails;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import JourneyHeader from "./JourneyHeader";
// import JourneyNavigation from "./JourneyNavigation";
// import JourneyTabs from "./JourneyTabs";
// import JourneyContent from "./JourneyContent";
// import JourneyCallToAction from "./JourneyCallToAction";
// import BottomNavigation from "../BottomNavigation";
// import { getJourneyDetail } from "../../api/journeyDetail";

// function JourneyDetails() {
//   const { id } = useParams();
//   const [journal, setJournal] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getJourneyDetail(id);
//         setJournal(data);
//       } catch (err) {
//         console.error("Failed to load journey:", err);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (!journal) return <p className="p-6">Loading...</p>;

//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="px-4 py-12 mx-auto my-0 max-w-4xl max-md:px-4 max-md:py-8 max-sm:px-3 max-sm:py-6">
//         <JourneyNavigation />
//         <JourneyTabs journal={journal} />
//         <JourneyContent journal={journal} /> {/* 👈 pass the data here */}
//         <hr className="mx-0 my-12 h-px bg-slate-200" />
//         <JourneyCallToAction />
//       </main>
//       <BottomNavigation />
//     </div>
//   );
// }

// export default JourneyDetails;
