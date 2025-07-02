"use client";
import Header from "./Header";
import HeroSection from "./HeroSection";
import MemoriesSection from "./MemoriesSection";
import JourneyMapSection from "./JourneyMapSection";
import RecentEntriesSection from "./RecentEntriesSection";
import BottomNavigation from "../BottomNavigation";
import Footer from "./Footer";
import AboutUs from "../AboutUs";
import FAQ from "../FAQ";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function TravelJournal() {

const {isLoggedIn}=useContext(UserContext);

  return (
    <main className="w-full min-h-screen">
      <section className="px-4 pt-8  mx-auto my-12 max-w-[1216px] max-md:px-6 max-sm:px-4">
        <HeroSection/>
        <MemoriesSection />
       {isLoggedIn ?  <JourneyMapSection /> : <AboutUs/>}
        {isLoggedIn?<RecentEntriesSection />:<FAQ/>}
        <section className="pt-12 pb-8">
          <Footer />
        </section>
      </section>
    </main>
  );
}

export default TravelJournal;
