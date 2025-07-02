import React from "react";

function FilterTabs() {
  return (
    <nav className="box-border flex items-center p-1 m-0 mb-6 w-full h-10 rounded-2xl bg-slate-100">
      <button className="box-border flex-1 p-0 m-0 h-8 text-sm font-medium rounded-xl cursor-pointer border-[none] text-slate-600">
        All Photos
      </button>
      <button className="box-border flex-1 p-0 m-0 h-8 text-sm font-medium rounded-xl cursor-pointer border-[none] text-slate-600">
        Favorites
      </button>
      <button className="box-border flex-1 p-0 m-0 h-8 text-sm font-medium rounded-xl cursor-pointer border-[none] text-slate-600">
        Recent
      </button>
    </nav>
  );
}

export default FilterTabs;
