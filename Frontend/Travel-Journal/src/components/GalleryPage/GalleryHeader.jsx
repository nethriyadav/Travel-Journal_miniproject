import React from "react";

function GalleryHeader() {
  return (
    <section className="box-border flex justify-between items-center p-0 m-0 mb-6 max-sm:flex-col max-sm:gap-4 max-sm:items-start">
      <h2 className="box-border p-0 m-0 text-2xl font-medium text-slate-700 max-sm:mb-4">
        Photo Gallery
      </h2>
      <div className="box-border flex gap-2 p-0 m-0">
        <button className="box-border flex justify-center items-center p-0 m-0 w-10 h-10 bg-blue-600 rounded-2xl cursor-pointer border-[none]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
            style={{ width: "16px", height: "16px" }}
          >
            <path
              d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
              stroke="#F8FAFC"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 6H14"
              stroke="#F8FAFC"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 10H14"
              stroke="#F8FAFC"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 2V14"
              stroke="#F8FAFC"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 2V14"
              stroke="#F8FAFC"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="box-border flex justify-center items-center p-0 m-0 w-10 h-10 bg-gray-50 rounded-2xl border border-solid cursor-pointer border-slate-200">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
            style={{ width: "16px", height: "16px" }}
          >
            <path
              d="M9.66683 2.66675H6.3335L4.66683 4.66675H2.66683C2.31321 4.66675 1.97407 4.80722 1.72402 5.05727C1.47397 5.30732 1.3335 5.64646 1.3335 6.00008V12.0001C1.3335 12.3537 1.47397 12.6928 1.72402 12.9429C1.97407 13.1929 2.31321 13.3334 2.66683 13.3334H13.3335C13.6871 13.3334 14.0263 13.1929 14.2763 12.9429C14.5264 12.6928 14.6668 12.3537 14.6668 12.0001V6.00008C14.6668 5.64646 14.5264 5.30732 14.2763 5.05727C14.0263 4.80722 13.6871 4.66675 13.3335 4.66675H11.3335L9.66683 2.66675Z"
              stroke="#344256"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10.6667C9.10457 10.6667 10 9.77132 10 8.66675C10 7.56218 9.10457 6.66675 8 6.66675C6.89543 6.66675 6 7.56218 6 8.66675C6 9.77132 6.89543 10.6667 8 10.6667Z"
              stroke="#344256"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default GalleryHeader;
