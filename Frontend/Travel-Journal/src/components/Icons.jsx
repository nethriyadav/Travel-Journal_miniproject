import React from "react";

export function SearchIcon() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="search-svg"
    >
      <path
        d="M7.56331 12.6667C10.5088 12.6667 12.8966 10.2789 12.8966 7.33333C12.8966 4.38781 10.5088 2 7.56331 2C4.61779 2 2.22998 4.38781 2.22998 7.33333C2.22998 10.2789 4.61779 12.6667 7.56331 12.6667Z"
        stroke="#4D6280"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2299 14L11.3633 11.1333"
        stroke="#4D6280"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="meta-icon"
    >
      <path
        d="M4.66675 1.43677V3.7701"
        stroke="#4D6280"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33325 1.43677V3.7701"
        stroke="#4D6280"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0833 2.60352H2.91667C2.27233 2.60352 1.75 3.12585 1.75 3.77018V11.9368C1.75 12.5812 2.27233 13.1035 2.91667 13.1035H11.0833C11.7277 13.1035 12.25 12.5812 12.25 11.9368V3.77018C12.25 3.12585 11.7277 2.60352 11.0833 2.60352Z"
        stroke="#4D6280"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.75 6.10352H12.25"
        stroke="#4D6280"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LocationIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="meta-icon"
    >
      <path
        d="M11.9166 6.10343C11.9166 9.01602 8.6855 12.0494 7.6005 12.9862C7.49942 13.0622 7.37638 13.1033 7.24992 13.1033C7.12345 13.1033 7.00041 13.0622 6.89934 12.9862C5.81434 12.0494 2.58325 9.01602 2.58325 6.10343C2.58325 4.86576 3.07492 3.67877 3.95009 2.8036C4.82526 1.92843 6.01224 1.43677 7.24992 1.43677C8.4876 1.43677 9.67458 1.92843 10.5498 2.8036C11.4249 3.67877 11.9166 4.86576 11.9166 6.10343Z"
        stroke="#4D6280"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.25 7.85352C8.2165 7.85352 9 7.07001 9 6.10352C9 5.13702 8.2165 4.35352 7.25 4.35352C6.2835 4.35352 5.5 5.13702 5.5 6.10352C5.5 7.07001 6.2835 7.85352 7.25 7.85352Z"
        stroke="#4D6280"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeIcon({ active = false }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="nav-icon"
    >
      <path
        d="M15.1899 21.5V13.5C15.1899 13.2348 15.0846 12.9804 14.897 12.7929C14.7095 12.6054 14.4552 12.5 14.1899 12.5H10.1899C9.92472 12.5 9.67037 12.6054 9.48283 12.7929C9.2953 12.9804 9.18994 13.2348 9.18994 13.5V21.5"
        stroke={active ? "#0D6DFD" : "#4D6280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.18994 10.5C3.18987 10.2091 3.25328 9.92162 3.37573 9.65771C3.49818 9.39381 3.67674 9.15979 3.89894 8.972L10.8989 2.973C11.2599 2.66791 11.7173 2.50052 12.1899 2.50052C12.6626 2.50052 13.12 2.66791 13.4809 2.973L20.4809 8.972C20.7031 9.15979 20.8817 9.39381 21.0042 9.65771C21.1266 9.92162 21.19 10.2091 21.1899 10.5V19.5C21.1899 20.0304 20.9792 20.5391 20.6042 20.9142C20.2291 21.2893 19.7204 21.5 19.1899 21.5H5.18994C4.65951 21.5 4.1508 21.2893 3.77573 20.9142C3.40066 20.5391 3.18994 20.0304 3.18994 19.5V10.5Z"
        stroke={active ? "#0D6DFD" : "#4D6280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function JournalIcon({active=false}) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="nav-icon"
    >
      <path
        d="M12.5898 7.5V21.5"
        stroke={active ? "#0D6DFD" : "#4D6280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.58984 18.5C3.32463 18.5 3.07027 18.3946 2.88274 18.2071C2.6952 18.0196 2.58984 17.7652 2.58984 17.5V4.5C2.58984 4.23478 2.6952 3.98043 2.88274 3.79289C3.07027 3.60536 3.32463 3.5 3.58984 3.5H8.58984C9.65071 3.5 10.6681 3.92143 11.4183 4.67157C12.1684 5.42172 12.5898 6.43913 12.5898 7.5C12.5898 6.43913 13.0113 5.42172 13.7614 4.67157C14.5116 3.92143 15.529 3.5 16.5898 3.5H21.5898C21.8551 3.5 22.1094 3.60536 22.297 3.79289C22.4845 3.98043 22.5898 4.23478 22.5898 4.5V17.5C22.5898 17.7652 22.4845 18.0196 22.297 18.2071C22.1094 18.3946 21.8551 18.5 21.5898 18.5H15.5898C14.7942 18.5 14.0311 18.8161 13.4685 19.3787C12.9059 19.9413 12.5898 20.7044 12.5898 21.5C12.5898 20.7044 12.2738 19.9413 11.7112 19.3787C11.1486 18.8161 10.3855 18.5 9.58984 18.5H3.58984Z"
        stroke={active ? "#0D6DFD" : "#4D6280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapIcon({active=false}) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="nav-icon"
    >
      <path
        d="M15.086 6.05299C15.3636 6.1917 15.6697 6.26392 15.98 6.26392C16.2903 6.26392 16.5964 6.1917 16.874 6.05299L20.533 4.22299C20.6856 4.14674 20.8551 4.11079 21.0255 4.11855C21.1959 4.12631 21.3614 4.17752 21.5064 4.26732C21.6515 4.35711 21.7711 4.4825 21.854 4.63157C21.9369 4.78063 21.9802 4.94842 21.98 5.11899V17.883C21.9799 18.0686 21.9281 18.2506 21.8304 18.4085C21.7328 18.5664 21.5931 18.694 21.427 18.777L16.874 21.054C16.5964 21.1927 16.2903 21.2649 15.98 21.2649C15.6697 21.2649 15.3636 21.1927 15.086 21.054L10.874 18.948C10.5964 18.8093 10.2903 18.7371 9.97998 18.7371C9.66965 18.7371 9.36358 18.8093 9.08598 18.948L5.42698 20.778C5.27434 20.8543 5.10471 20.8902 4.93424 20.8824C4.76377 20.8746 4.59814 20.8233 4.4531 20.7334C4.30806 20.6435 4.18844 20.518 4.10563 20.3687C4.02282 20.2195 3.97956 20.0516 3.97998 19.881V7.11799C3.98008 6.93232 4.03187 6.75036 4.12954 6.59246C4.22721 6.43456 4.3669 6.30698 4.53298 6.22399L9.08598 3.94699C9.36358 3.80827 9.66965 3.73605 9.97998 3.73605C10.2903 3.73605 10.5964 3.80827 10.874 3.94699L15.086 6.05299Z"
        stroke={active ? "#0D6DFD" : "#4D6280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.98 6.26401V21.264"
        stroke={active ? "#0D6DFD" : "#4D6280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.97998 3.73599V18.736"
        stroke={active ? "#0D6DFD" : "#4D6280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GalleryIcon({active=false}) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="nav-icon"
    >
      <path
        d="M19.3899 3.5H5.38989C4.28532 3.5 3.38989 4.39543 3.38989 5.5V19.5C3.38989 20.6046 4.28532 21.5 5.38989 21.5H19.3899C20.4945 21.5 21.3899 20.6046 21.3899 19.5V5.5C21.3899 4.39543 20.4945 3.5 19.3899 3.5Z"
        stroke={active ? "#0D6DFD" : "#4D6280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.38989 11.5C10.4945 11.5 11.3899 10.6046 11.3899 9.5C11.3899 8.39543 10.4945 7.5 9.38989 7.5C8.28532 7.5 7.38989 8.39543 7.38989 9.5C7.38989 10.6046 8.28532 11.5 9.38989 11.5Z"
        stroke={active ? "#0D6DFD" : "#4D6280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3899 15.5L18.3039 12.414C17.9288 12.0391 17.4202 11.8284 16.8899 11.8284C16.3596 11.8284 15.8509 12.0391 15.4759 12.414L6.38989 21.5"
        stroke={active ? "#0D6DFD" : "#4D6280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
