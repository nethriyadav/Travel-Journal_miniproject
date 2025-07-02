import React from "react";
import { SearchIcon } from "./Icons";

function Header() {
  return (
    <header className="box-border flex justify-center items-center p-0 m-0 w-full border-b border-solid backdrop-blur bg-gray-50 bg-opacity-80 border-b-slate-200 border-b-opacity-40 h-[65px]">
      <div className="box-border flex justify-between items-center px-4 py-3 m-0 h-16 w-[1400px]">
        <h1 className="box-border p-0 m-0 text-xl font-medium text-slate-700 max-sm:text-lg">
          Gallery
        </h1>
        <div className="box-border relative p-0 m-0 w-[260px] max-sm:hidden">
          <div className="box-border relative p-0 m-0 w-full">
            <div className="absolute left-10 top-12 w-16 h-16">
            </div>
              <SearchIcon />
            <input
              type="text"
              placeholder="Search journal entries..."
              className="box-border py-3 pr-3 pl-8 m-0 w-full h-10 text-sm bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600"
              aria-label="Search journal entries"
            />
          </div>
        </div>
        <button className="box-border px-4 py-3 m-0 text-sm font-medium bg-blue-600 rounded-2xl cursor-pointer border-[none] text-slate-50">
          New Entry
        </button>
      </div>
    </header>
  );
}

export default Header;
