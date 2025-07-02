import React from "react";

function FilterControls() {
  return (
    <div className="flex gap-2">
      {/* <button className="flex gap-2 items-center px-3 py-2.5 bg-gray-50 rounded-2xl border border-slate-200">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] h-[16px]"
        >
          <path
            d="M14.7467 2H1.41333L6.74666 8.30667V12.6667L9.41333 14V8.30667L14.7467 2Z"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm text-slate-700">Filter</span>
      </button>
      <button className="flex gap-2 items-center px-3 py-2.5 bg-gray-50 rounded-2xl border border-slate-200">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] h-[16px]"
        >
          <path
            d="M2.85986 8H2.86653"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.85986 12H2.86653"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.85986 4H2.86653"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.19336 8H14.86"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.19336 12H14.86"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.19336 4H14.86"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm text-slate-700">List</span>
      </button> */}
      <button className="flex gap-2 items-center px-3 py-2.5 bg-blue-600 rounded-2xl">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] h-[16px]"
        >
          <path
            d="M10.0139 3.70209C10.1989 3.79457 10.403 3.84271 10.6099 3.84271C10.8168 3.84271 11.0208 3.79457 11.2059 3.70209L13.6452 2.48209C13.7469 2.43126 13.8599 2.4073 13.9735 2.41247C14.0871 2.41764 14.1975 2.45178 14.2942 2.51165C14.3908 2.57151 14.4706 2.6551 14.5259 2.75448C14.5811 2.85386 14.61 2.96572 14.6099 3.07943V11.5888C14.6098 11.7125 14.5753 11.8338 14.5102 11.9391C14.4451 12.0444 14.3519 12.1294 14.2412 12.1848L11.2059 13.7028C11.0208 13.7952 10.8168 13.8434 10.6099 13.8434C10.403 13.8434 10.1989 13.7952 10.0139 13.7028L7.20587 12.2988C7.0208 12.2063 6.81675 12.1581 6.60987 12.1581C6.40298 12.1581 6.19893 12.2063 6.01387 12.2988L3.57453 13.5188C3.47277 13.5696 3.35968 13.5936 3.24604 13.5884C3.13239 13.5832 3.02197 13.549 2.92528 13.489C2.82858 13.4291 2.74884 13.3454 2.69363 13.2459C2.63842 13.1465 2.60958 13.0345 2.60987 12.9208V4.41209C2.60993 4.28832 2.64445 4.16701 2.70957 4.06174C2.77468 3.95648 2.86781 3.87142 2.97853 3.81609L6.01387 2.29809C6.19893 2.20561 6.40298 2.15747 6.60987 2.15747C6.81675 2.15747 7.0208 2.20561 7.20587 2.29809L10.0139 3.70209Z"
            stroke="#F8FAFC"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6099 3.84277V13.8428"
            stroke="#F8FAFC"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.60986 2.15723V12.1572"
            stroke="#F8FAFC"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm text-slate-50">Map</span>
      </button>
    </div>
  );
}

export default FilterControls;
