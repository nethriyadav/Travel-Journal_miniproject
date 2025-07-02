"use client";
import React, { useState, useEffect,useContext } from "react";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";
import ProfileTabs from "./ProfileTabs";
import StatsGrid from "./StatsGrid";
import BottomNavigation from "../BottomNavigation";
import LikedJournals from "./LikedJournals";
import UserInsights from "./UserInsights";
import { getUserInsights, getMostVisitedLocations } from "../../api/analytics";
import { getCurrentUser } from "../../api/user";
import { UserContext } from "../../context/UserContext";


function ProfilePage() {
  const [activeTab, setActiveTab] = useState("stats");
  const [insights, setInsights] = useState(null);
  const [topLocations, setTopLocations] = useState([]);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getCurrentUser()
    .then(setUser)
    .catch((err) => console.error("Failed to fetch user:", err));
  }, []);
  
  // Fetch insights + most visited locations only when "about" tab is active


  useEffect(() => {
    const fetchData = async () => {
      if (activeTab === "about" && (!insights || topLocations.length === 0)) {
        setLoadingInsights(true);
        try {
          const [insightsData, locationData] = await Promise.all([
            getUserInsights(),
            getMostVisitedLocations()
          ]);
          setInsights(insightsData);
          setTopLocations(locationData); // if you want to pass this separately
        } catch (err) {
          console.error("Failed to fetch insights or top locations:", err);
        } finally {
          setLoadingInsights(false);
        }
      }
    };
    fetchData();
  }, [activeTab]);

  return (
    <div className="flex flex-col bg-[linear-gradient(0deg,#F9FAFB_0%,#F9FAFB_100%),#FFF] min-h-screen overflow-y-auto pb-20 pt-5">
      <main className="flex flex-col items-center px-4 flex-grow pt-2">
        <div className="flex flex-col items-center mt-10 w-full max-w-[1216px]">
          <ProfileInfo />
          <div className="mt-10 w-full">
            <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "stats" && <StatsGrid />}
            {activeTab === "badges" && <LikedJournals />}
            {activeTab === "about" && (
              loadingInsights ? (
                <p className="text-center text-gray-500 text-sm mt-6">Loading insights...</p>
              ) : (
                <UserInsights insights={{ ...insights, topLocations }} />
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;



// "use client";
// import React from "react";
// import Header from "./Header";
// import ProfileInfo from "./ProfileInfo";
// import ProfileTabs from "./ProfileTabs";
// import StatsGrid from "./StatsGrid";
// import BottomNavigation from "../BottomNavigation";

// function ProfilePage() {
//   return (
//     <div className="flex flex-col bg-[linear-gradient(0deg,#F9FAFB_0%,#F9FAFB_100%),#FFF] min-h-screen">
//       <main className="flex flex-col items-center px-4 flex-grow pt-2">
//         <div className="flex flex-col items-center mt-10 w-full max-w-[1216px]">
//           <ProfileInfo />
//           <div className="mt-10 w-full">
//             <ProfileTabs />
//             <StatsGrid />
//           </div>
//         </div>
//       </main>
//       <BottomNavigation />
//     </div>
//   );
// }

// export default ProfilePage;
