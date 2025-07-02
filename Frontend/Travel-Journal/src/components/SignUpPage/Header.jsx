import React from "react";
import BackIcon from "./icons/BackIcon";
import { Link } from "react-router-dom";

function Header({ title}) {
  return (
    <header className="flex justify-center w-full border-b border-solid backdrop-blur bg-gray-50 bg-opacity-80 border-b-slate-200 border-b-opacity-40 h-[65px]">
      <div className="flex relative items-center px-4 py-0 w-full h-16 max-w-[1400px]">
        <button
          className="flex justify-center items-center w-10 h-10 rounded-2xl cursor-pointer"
          aria-label="Go back"
        >
          <Link to="/"><BackIcon /></Link>
        </button>
        <h2 className="ml-4 text-xl font-medium text-slate-700 max-sm:text-lg">
          {title}
        </h2>
        {/* <button className="absolute right-4 px-4 py-3 text-sm font-medium bg-blue-600 rounded-2xl cursor-pointer text-slate-50">
          {actionLabel}
        </button> */}
      </div>
    </header>
  );
}

export default Header;
