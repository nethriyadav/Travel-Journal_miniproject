import React from "react";

function Header() {
  return (
    <header className="flex justify-center items-center px-64 w-full border backdrop-blur-[[8px]] bg-gray-50 bg-opacity-80 border-slate-200 border-opacity-40 h-[65px] max-md:px-10 max-sm:px-5">
      <div className="flex justify-between items-center px-4 py-3 w-full h-16">
        <h2 className="text-xl font-medium leading-7 text-slate-700">
          Your Journey Map
        </h2>
        <div className="flex gap-5 items-center max-sm:hidden">
          <div className="relative w-[260px]">
            <input
              type="text"
              placeholder="Search journal entries..."
              className="pr-4 pl-8 w-full h-10 text-sm bg-gray-50 rounded-2xl border border-slate-200 text-slate-600"
            />
            <div>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[10px] top-[12px]"
              >
                <path
                  d="M7.35335 12.6667C10.2989 12.6667 12.6867 10.2789 12.6867 7.33333C12.6867 4.38781 10.2989 2 7.35335 2C4.40783 2 2.02002 4.38781 2.02002 7.33333C2.02002 10.2789 4.40783 12.6667 7.35335 12.6667Z"
                  stroke="#4D6280"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.02 14L11.1533 11.1333"
                  stroke="#4D6280"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <button className="px-4 py-3 text-sm bg-blue-600 rounded-2xl text-slate-50">
            New Entry
          </button>
        </div>
        <button className="hidden max-sm:block" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
