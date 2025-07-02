import React from "react";

function BottomNavigation() {
  return (
    <nav className="flex justify-center items-center mt-auto h-16 border backdrop-blur-[8px] bg-gray-50 bg-opacity-90 border-slate-200 border-opacity-40">
      <div className="flex justify-center items-center w-[512px]">
        <NavItem
          label="Home"
          isActive={false}
          icon={
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
          }
        />
        <NavItem
          label="Journal"
          isActive={false}
          icon={
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px]"
            >
              <path
                d="M12.5903 7.5V21.5"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.59033 18.5C3.32512 18.5 3.07076 18.3946 2.88323 18.2071C2.69569 18.0196 2.59033 17.7652 2.59033 17.5V4.5C2.59033 4.23478 2.69569 3.98043 2.88323 3.79289C3.07076 3.60536 3.32512 3.5 3.59033 3.5H8.59033C9.6512 3.5 10.6686 3.92143 11.4188 4.67157C12.1689 5.42172 12.5903 6.43913 12.5903 7.5C12.5903 6.43913 13.0118 5.42172 13.7619 4.67157C14.5121 3.92143 15.5295 3.5 16.5903 3.5H21.5903C21.8555 3.5 22.1099 3.60536 22.2974 3.79289C22.485 3.98043 22.5903 4.23478 22.5903 4.5V17.5C22.5903 17.7652 22.485 18.0196 22.2974 18.2071C22.1099 18.3946 21.8555 18.5 21.5903 18.5H15.5903C14.7947 18.5 14.0316 18.8161 13.469 19.3787C12.9064 19.9413 12.5903 20.7044 12.5903 21.5C12.5903 20.7044 12.2743 19.9413 11.7117 19.3787C11.149 18.8161 10.386 18.5 9.59033 18.5H3.59033Z"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
        <NavItem
          label="Map"
          isActive={false}
          icon={
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
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.98 6.26392V21.2639"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.97998 3.73608V18.7361"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
        <NavItem
          label="Gallery"
          isActive={false}
          icon={
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px]"
            >
              <path
                d="M19.3901 3.5H5.39014C4.28557 3.5 3.39014 4.39543 3.39014 5.5V19.5C3.39014 20.6046 4.28557 21.5 5.39014 21.5H19.3901C20.4947 21.5 21.3901 20.6046 21.3901 19.5V5.5C21.3901 4.39543 20.4947 3.5 19.3901 3.5Z"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.39014 11.5C10.4947 11.5 11.3901 10.6046 11.3901 9.5C11.3901 8.39543 10.4947 7.5 9.39014 7.5C8.28557 7.5 7.39014 8.39543 7.39014 9.5C7.39014 10.6046 8.28557 11.5 9.39014 11.5Z"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.3901 15.4999L18.3041 12.4139C17.9291 12.039 17.4205 11.8284 16.8901 11.8284C16.3598 11.8284 15.8512 12.039 15.4761 12.4139L6.39014 21.4999"
                stroke="#4D6280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
        <NavItem
          label="Profile"
          isActive={true}
          profileImage="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd4cfe83510062f071e2ca1e3bd937375124e93"
        />
      </div>
    </nav>
  );
}

function NavItem({ label, icon, isActive, profileImage }) {
  return (
    <a
      href="#"
      className={`flex flex-col gap-${
        profileImage ? "0.5" : "1"
      } items-center py-${profileImage ? "2" : "2.5"} w-[102px]`}
      aria-current={isActive ? "page" : undefined}
    >
      {profileImage ? (
        <div className="overflow-hidden w-7 h-7 rounded-full">
          <img
            src={profileImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div>{icon}</div>
      )}
      <span
        className={`text-xs ${isActive ? "text-blue-600" : "text-slate-600"}`}
      >
        {label}
      </span>
    </a>
  );
}

export default BottomNavigation;
