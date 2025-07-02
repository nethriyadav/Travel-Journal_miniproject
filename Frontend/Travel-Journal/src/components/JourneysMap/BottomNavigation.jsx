import React from "react";

function BottomNavigation() {
  return (
    <footer className="mt-auto">
      <nav className="flex justify-center items-center h-16 border backdrop-blur-[[8px]] bg-gray-50 bg-opacity-90 border-slate-200 border-opacity-40">
        <div className="flex justify-center">
          <a
            href="#"
            className="flex flex-col gap-1 items-center py-2.5 w-[102px]"
            aria-label="Home"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px]"
            >
              <path
                d="M15.1899 21.5V13.5C15.1899 13.2348 15.0846 12.9804 14.897 12.7929C14.7095 12.6054 14.4552 12.5 14.1899 12.5H10.1899C9.92472 12.5 9.67037 12.6054 9.48283 12.7929C9.2953 12.9804 9.18994 13.2348 9.18994 13.5V21.5"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.18994 10.5C3.18987 10.209 3.25328 9.92159 3.37573 9.65768C3.49818 9.39378 3.67674 9.15976 3.89894 8.97197L10.8989 2.97297C11.2599 2.66788 11.7173 2.50049 12.1899 2.50049C12.6626 2.50049 13.12 2.66788 13.4809 2.97297L20.4809 8.97197C20.7031 9.15976 20.8817 9.39378 21.0042 9.65768C21.1266 9.92159 21.19 10.209 21.1899 10.5V19.5C21.1899 20.0304 20.9792 20.5391 20.6042 20.9142C20.2291 21.2893 19.7204 21.5 19.1899 21.5H5.18994C4.65951 21.5 4.1508 21.2893 3.77573 20.9142C3.40066 20.5391 3.18994 20.0304 3.18994 19.5V10.5Z"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs font-medium text-slate-600">Home</span>
          </a>
          <a
            href="#"
            className="flex flex-col gap-1 items-center py-2.5 w-[102px]"
            aria-label="Journal"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px]"
            >
              <path
                d="M12.5898 7.5V21.5"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.58984 18.5C3.32463 18.5 3.07027 18.3946 2.88274 18.2071C2.6952 18.0196 2.58984 17.7652 2.58984 17.5V4.5C2.58984 4.23478 2.6952 3.98043 2.88274 3.79289C3.07027 3.60536 3.32463 3.5 3.58984 3.5H8.58984C9.65071 3.5 10.6681 3.92143 11.4183 4.67157C12.1684 5.42172 12.5898 6.43913 12.5898 7.5C12.5898 6.43913 13.0113 5.42172 13.7614 4.67157C14.5116 3.92143 15.529 3.5 16.5898 3.5H21.5898C21.8551 3.5 22.1094 3.60536 22.297 3.79289C22.4845 3.98043 22.5898 4.23478 22.5898 4.5V17.5C22.5898 17.7652 22.4845 18.0196 22.297 18.2071C22.1094 18.3946 21.8551 18.5 21.5898 18.5H15.5898C14.7942 18.5 14.0311 18.8161 13.4685 19.3787C12.9059 19.9413 12.5898 20.7044 12.5898 21.5C12.5898 20.7044 12.2738 19.9413 11.7112 19.3787C11.1486 18.8161 10.3855 18.5 9.58984 18.5H3.58984Z"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs font-medium text-slate-600">Journal</span>
          </a>
          <a
            href="#"
            className="flex flex-col gap-1 items-center py-2.5 w-[102px]"
            aria-label="Map"
            aria-current="page"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px]"
            >
              <path
                d="M15.086 6.05302C15.3636 6.19173 15.6697 6.26395 15.98 6.26395C16.2903 6.26395 16.5964 6.19173 16.874 6.05302L20.533 4.22302C20.6856 4.14678 20.8551 4.11083 21.0255 4.11858C21.1959 4.12634 21.3614 4.17755 21.5064 4.26735C21.6515 4.35714 21.7711 4.48253 21.854 4.6316C21.9369 4.78067 21.9802 4.94846 21.98 5.11902V17.883C21.9799 18.0687 21.9281 18.2506 21.8304 18.4085C21.7328 18.5664 21.5931 18.694 21.427 18.777L16.874 21.054C16.5964 21.1927 16.2903 21.2649 15.98 21.2649C15.6697 21.2649 15.3636 21.1927 15.086 21.054L10.874 18.948C10.5964 18.8093 10.2903 18.7371 9.97998 18.7371C9.66965 18.7371 9.36358 18.8093 9.08598 18.948L5.42698 20.778C5.27434 20.8543 5.10471 20.8902 4.93424 20.8824C4.76377 20.8746 4.59814 20.8233 4.4531 20.7334C4.30806 20.6435 4.18844 20.518 4.10563 20.3688C4.02282 20.2196 3.97956 20.0517 3.97998 19.881V7.11802C3.98008 6.93235 4.03187 6.75039 4.12954 6.59249C4.22721 6.43459 4.3669 6.30701 4.53298 6.22402L9.08598 3.94702C9.36358 3.8083 9.66965 3.73608 9.97998 3.73608C10.2903 3.73608 10.5964 3.8083 10.874 3.94702L15.086 6.05302Z"
                stroke="#0D6DFD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.98 6.26392V21.2639"
                stroke="#0D6DFD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.97998 3.73608V18.7361"
                stroke="#0D6DFD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs font-medium text-blue-600">Map</span>
          </a>
          <a
            href="#"
            className="flex flex-col gap-1 items-center py-2.5 w-[102px]"
            aria-label="Gallery"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px]"
            >
              <path
                d="M19.3899 3.5H5.38989C4.28532 3.5 3.38989 4.39543 3.38989 5.5V19.5C3.38989 20.6046 4.28532 21.5 5.38989 21.5H19.3899C20.4945 21.5 21.3899 20.6046 21.3899 19.5V5.5C21.3899 4.39543 20.4945 3.5 19.3899 3.5Z"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.38989 11.5C10.4945 11.5 11.3899 10.6046 11.3899 9.5C11.3899 8.39543 10.4945 7.5 9.38989 7.5C8.28532 7.5 7.38989 8.39543 7.38989 9.5C7.38989 10.6046 8.28532 11.5 9.38989 11.5Z"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.3899 15.4999L18.3039 12.4139C17.9288 12.039 17.4202 11.8284 16.8899 11.8284C16.3596 11.8284 15.8509 12.039 15.4759 12.4139L6.38989 21.4999"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs font-medium text-slate-600">Gallery</span>
          </a>
          <a
            href="#"
            className="flex flex-col gap-1 items-center py-2.5 w-[102px]"
            aria-label="Profile"
          >
            <div className="overflow-hidden w-7 h-7 rounded-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd4cfe83510062f071e2ca1e3bd937375124e93"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-medium text-slate-600">Profile</span>
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default BottomNavigation;
