import React from "react";

function Header() {
  return (
    <header className="flex top-0 z-50 justify-center items-center border backdrop-blur-[8px] bg-gray-50 bg-opacity-80 border-slate-200 border-opacity-40 h-[65px]">
      <div className="flex justify-between items-center px-4 w-full h-16 max-w-[1400px]">
        <div className="flex gap-4 items-center">
          <button
            className="flex justify-center items-center p-3 w-10 h-10 rounded-2xl"
            aria-label="Go back"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[16px] h-[16px]"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="#344256"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="text-xl text-slate-700">Profile</h1>
        </div>
        <button className="px-4 py-3 h-10 text-sm bg-blue-600 rounded-2xl text-slate-50">
          New Entry
        </button>
      </div>
    </header>
  );
}

export default Header;
