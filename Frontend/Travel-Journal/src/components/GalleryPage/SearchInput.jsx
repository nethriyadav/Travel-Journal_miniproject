import React from "react";

function SearchInput() {
  return (
    <div className="box-border relative p-0 m-0 w-[260px] max-sm:hidden">
      <div className="box-border relative p-0 m-0 w-full">
        <div className="absolute left-10 top-12 w-16 h-16">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-10 top-12 w-16 h-16"
            style={{
              position: "absolute",
              left: "10px",
              top: "12px",
              width: "16px",
              height: "16px",
            }}
          >
            <path
              d="M8.30306 12.6667C11.2486 12.6667 13.6364 10.2789 13.6364 7.33333C13.6364 4.38781 11.2486 2 8.30306 2C5.35754 2 2.96973 4.38781 2.96973 7.33333C2.96973 10.2789 5.35754 12.6667 8.30306 12.6667Z"
              stroke="#4D6280"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.9697 14L12.103 11.1333"
              stroke="#4D6280"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search journal entries..."
          className="box-border py-3 pr-3 pl-8 m-0 w-full h-10 text-sm bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600"
        />
      </div>
    </div>
  );
}

export default SearchInput;
