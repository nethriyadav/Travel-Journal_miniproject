import React from "react";
import { GridIcon, CameraIcon } from "./Icons";

function GalleryControls() {
  return (
    <section className="mb-6">
      <div className="box-border flex justify-between items-center p-0 m-0 mb-6 max-sm:flex-col max-sm:gap-4 max-sm:items-start">
        <h2 className="box-border p-0 m-0 text-2xl font-medium text-slate-700 max-sm:mb-4">
          Photo Gallery
        </h2>
        <div className="box-border flex gap-2 p-0 m-0">
          <button
            className="box-border flex justify-center items-center p-0 m-0 w-10 h-10 bg-blue-600 rounded-2xl cursor-pointer border-[none] hover:bg-blue-700"
            aria-label="Grid view"
          >
            <GridIcon />
          </button>
          {/* <button
            className="box-border flex justify-center items-center p-0 m-0 w-10 h-10 bg-gray-50 rounded-2xl border border-solid cursor-pointer border-slate-200 hover:bg-slate-200"
            aria-label="Camera view"
          >
            <CameraIcon />
          </button> */}
        </div>
      </div>
      <nav className="box-border flex items-center p-1 m-0 mb-6 w-full h-10 rounded-2xl bg-slate-100">
        <button className="box-border flex-1 p-0 m-0 h-8 text-sm font-medium rounded-xl cursor-pointer border-[none] text-slate-600 hover:bg-white hover:shadow-sm hover:text-slate-800 transition">
          My Photos
        </button>
        {/* <button className="box-border flex-1 p-0 m-0 h-8 text-sm font-medium rounded-xl cursor-pointer border-[none] text-slate-600 hover:bg-white hover:shadow-sm hover:text-slate-800 transition">
          Favorites
        </button>
        <button className="box-border flex-1 p-0 m-0 h-8 text-sm font-medium rounded-xl cursor-pointer border-[none] text-slate-600 hover:bg-white hover:shadow-sm hover:text-slate-800 transition">
          Recent
        </button> */}
      </nav>
    </section>
  );
}

export default GalleryControls;
