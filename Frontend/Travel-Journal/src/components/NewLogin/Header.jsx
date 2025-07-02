"use client";
import React from "react";

/**
 * Reusable header component with back button and title
 * @param {Object} props - Component props
 * @param {string} props.title - Header title
 * @param {Function} props.onBackClick - Back button click handler
 * @param {React.ReactNode} props.rightElement - Optional element to display on the right side
 */
const Header = ({ title, onBackClick, rightElement }) => {
  const backArrowSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]">
    <path d="M10 12L6 8L10 4" stroke="#344256" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`;

  return (
    <header className="flex justify-center items-center px-64 w-full border backdrop-blur-[[8px]] bg-gray-50 bg-opacity-80 border-slate-200 border-opacity-40 h-[65px] max-md:px-10 max-sm:px-4">
      <div className="flex justify-between items-center w-full h-16">
        <div className="flex gap-4 items-center">
          <button
            onClick={onBackClick}
            className="flex justify-center items-center p-3 w-10 h-10 rounded-2xl cursor-pointer"
            aria-label="Go back"
          >
            <div dangerouslySetInnerHTML={{ __html: backArrowSvg }} />
          </button>
          <h1 className="text-xl leading-7 text-slate-700">{title}</h1>
        </div>
        {rightElement && <div>{rightElement}</div>}
      </div>
    </header>
  );
};

export default Header;
