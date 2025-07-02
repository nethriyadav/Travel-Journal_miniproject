"use client";

import React from "react";

const Header = ({ title, onBackClick}) => {
  return (
    <header className="flex justify-center w-full border-b border-solid backdrop-blur bg-gray-50 bg-opacity-80 border-b-slate-200 border-b-opacity-40 h-[65px]">
      <div className="flex relative items-center px-4 py-0 w-full h-16 max-w-[1400px]">
        <button
          onClick={onBackClick}
          className="flex justify-center items-center w-10 h-10 rounded-2xl cursor-pointer"
          aria-label="Go back"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="back-icon" style="width: 16px; height: 16px"> <path d="M10 12L6 8L10 4" stroke="#344256" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
            }}
          />
        </button>
        <h1 className="ml-4 text-xl font-medium text-slate-700 max-sm:text-lg">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
