import React from "react";

function NewEntryHeader() {
  return (
    <header className="flex flex-col justify-center items-center px-16 py-3.5 w-full bg-gray-50 bg-opacity-80 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1368px] max-md:max-w-full">
        <div className="flex gap-4 text-xl leading-snug text-slate-700">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/66f55141cb55f14a1bd5b7c41c04337757c459af?placeholderIfAbsent=true&apiKey=a98f7f020f4a404481c6d8b704de868b"
            className="object-contain shrink-0 w-10 rounded-2xl aspect-square"
            alt="New Entry Icon"
          />
          <h1 className="my-auto">New Entry</h1>
        </div>
        <button className="px-4 py-3.5 text-sm leading-none bg-blue-600 rounded-2xl text-slate-50">
          New Entry
        </button>
      </div>
    </header>
  );
}

export default NewEntryHeader;
