"use client";
import React from "react";
import Header from "./Header";
import GalleryContent from "./GalleryContent";
import BottomNavigation from "../BottomNavigation";

function GalleryPage() {
  return (
     <div>

    <section className="flex flex-col bg-[linear-gradient(0deg,#F9FAFB_0%,#F9FAFB_100%),#FFF] min-h-screen pt-6 pb-14">
      <GalleryContent />
    </section>
      <BottomNavigation />
     </div>
  );
}

export default GalleryPage;
