import React from "react";

function GalleryTabs() {
  return (
    <nav className="mb-6 w-full h-10 rounded-2xl bg-slate-100">
      <div className="flex">
        <button className="flex-1 m-1 h-8 text-sm font-medium bg-gray-50 rounded-xl shadow-sm text-slate-700">
          All Photos
        </button>
        <button className="flex-1 text-sm font-medium text-slate-600">
          Favorites
        </button>
        <button className="flex-1 text-sm font-medium text-slate-600">
          Recent
        </button>
      </div>
    </nav>
  );
}

export default GalleryTabs;
