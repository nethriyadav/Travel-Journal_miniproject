import React from "react";
import IconButton from "./IconButton";

function JourneyHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-solid backdrop-blur bg-gray-50 bg-opacity-80 border-b-slate-200 border-b-opacity-40">
      <div className="flex items-center px-4 py-3 mx-auto my-0 h-16 max-w-[1400px] max-sm:p-3">
        <IconButton>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="back-icon"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="#344256"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
        <h1 className="ml-4 text-xl font-medium text-slate-700">
          Journey Details
        </h1>
        <button className="px-4 py-3 ml-auto text-sm font-medium bg-blue-600 rounded-2xl text-slate-50">
          New Entry
        </button>
      </div>
    </header>
  );
}

export default JourneyHeader;
