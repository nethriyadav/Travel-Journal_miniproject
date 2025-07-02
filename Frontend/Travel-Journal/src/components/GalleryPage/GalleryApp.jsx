"use client";
import React from "react";
import Header from "./Header";
import GalleryHeader from "./GalleryHeader";
import FilterTabs from "./FilterTabs";
import PhotoGrid from "./PhotoGrid";
import BottomNav from "./BottomNav";

function GalleryApp() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <Header />
      <main className="box-border px-0 py-10 mx-auto my-0 max-w-[1216px] max-md:px-5 max-md:py-10">
        <GalleryHeader />
        <FilterTabs />
        <PhotoGrid />
      </main>
      <BottomNav />
    </>
  );
}

export default GalleryApp;
