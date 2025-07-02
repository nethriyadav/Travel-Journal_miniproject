import React from "react";

function Header() {
  return (
    <header className="flex justify-center items-center px-64 pt-0 pb-px w-full border backdrop-blur-[[8px]] bg-gray-50 bg-opacity-80 border-slate-200 border-opacity-40 h-[65px] max-md:px-8 max-sm:px-4">
      <div className="flex justify-between items-center px-4 py-3 w-full h-16">
        <h1 className="text-xl font-medium leading-7 text-slate-700">
          Settings
        </h1>
        <button className="pt-3 pr-4 pb-3 pl-4 h-10 text-sm font-medium leading-5 bg-blue-600 rounded-2xl text-slate-50 w-[101px]">
          New Entry
        </button>
      </div>
    </header>
  );
}

export default Header;
