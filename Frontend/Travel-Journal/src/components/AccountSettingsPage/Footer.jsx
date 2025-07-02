import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center items-center mt-auto w-full h-16 border backdrop-blur-[[8px]] bg-gray-50 bg-opacity-90 border-slate-200 border-opacity-40">
      <nav className="flex justify-center items-start h-[63px] w-[512px]">
        <NavItem icon={<HomeIcon />} label="Home" />
        <NavItem icon={<JournalIcon />} label="Journal" />
        <NavItem icon={<MapIcon />} label="Map" />
        <NavItem icon={<GalleryIcon />} label="Gallery" />
        <NavItem
          icon={
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd4cfe83510062f071e2ca1e3bd937375124e93"
              alt=""
              className="w-[28px] h-[28px] rounded-[9999px]"
            />
          }
          label="Profile"
          active
        />
      </nav>
    </footer>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <div
      className={`flex flex-col gap-${
        active ? "0.5" : "1"
      } justify-center items-center px-8 py-2.5 h-[63px] w-[102px]`}
    >
      <div>{icon}</div>
      <span
        className={`text-xs font-medium leading-4 ${
          active ? "text-blue-600" : "text-slate-600"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[24px] h-[24px]"
    >
      <path
        d="M15.1904 21.5V13.5C15.1904 13.2348 15.0851 12.9804 14.8975 12.7929C14.71 12.6054 14.4556 12.5 14.1904 12.5H10.1904C9.92521 12.5 9.67086 12.6054 9.48332 12.7929C9.29579 12.9804 9.19043 13.2348 9.19043 13.5V21.5"
        stroke="#4D6280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3.19043 10.5C3.19036 10.209 3.25376 9.92159 3.37622 9.65768C3.49867 9.39378 3.67723 9.15976 3.89943 8.97197L10.8994 2.97297C11.2604 2.66788 11.7178 2.50049 12.1904 2.50049C12.6631 2.50049 13.1204 2.66788 13.4814 2.97297L20.4814 8.97197C20.7036 9.15976 20.8822 9.39378 21.0046 9.65768C21.1271 9.92159 21.1905 10.209 21.1904 10.5V19.5C21.1904 20.0304 20.9797 20.5391 20.6046 20.9142C20.2296 21.2893 19.7209 21.5 19.1904 21.5H5.19043C4.66 21.5 4.15129 21.2893 3.77622 20.9142C3.40114 20.5391 3.19043 20.0304 3.19043 19.5V10.5Z"
        stroke="#4D6280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

function JournalIcon() {
  return (
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
      ></path>
      <path
        d="M3.58984 18.5C3.32463 18.5 3.07027 18.3946 2.88274 18.2071C2.6952 18.0196 2.58984 17.7652 2.58984 17.5V4.5C2.58984 4.23478 2.6952 3.98043 2.88274 3.79289C3.07027 3.60536 3.32463 3.5 3.58984 3.5H8.58984C9.65071 3.5 10.6681 3.92143 11.4183 4.67157C12.1684 5.42172 12.5898 6.43913 12.5898 7.5C12.5898 6.43913 13.0113 5.42172 13.7614 4.67157C14.5116 3.92143 15.529 3.5 16.5898 3.5H21.5898C21.8551 3.5 22.1094 3.60536 22.297 3.79289C22.4845 3.98043 22.5898 4.23478 22.5898 4.5V17.5C22.5898 17.7652 22.4845 18.0196 22.297 18.2071C22.1094 18.3946 21.8551 18.5 21.5898 18.5H15.5898C14.7942 18.5 14.0311 18.8161 13.4685 19.3787C12.9059 19.9413 12.5898 20.7044 12.5898 21.5C12.5898 20.7044 12.2738 19.9413 11.7112 19.3787C11.1486 18.8161 10.3855 18.5 9.58984 18.5H3.58984Z"
        stroke="#4D6280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[24px] h-[24px]"
    >
      <path
        d="M15.0855 6.05302C15.3631 6.19173 15.6692 6.26395 15.9795 6.26395C16.2898 6.26395 16.5959 6.19173 16.8735 6.05302L20.5325 4.22302C20.6851 4.14678 20.8546 4.11083 21.025 4.11858C21.1954 4.12634 21.3609 4.17755 21.506 4.26735C21.651 4.35714 21.7706 4.48253 21.8535 4.6316C21.9364 4.78067 21.9797 4.94846 21.9795 5.11902V17.883C21.9794 18.0687 21.9276 18.2506 21.8299 18.4085C21.7323 18.5664 21.5926 18.694 21.4265 18.777L16.8735 21.054C16.5959 21.1927 16.2898 21.2649 15.9795 21.2649C15.6692 21.2649 15.3631 21.1927 15.0855 21.054L10.8735 18.948C10.5959 18.8093 10.2898 18.7371 9.9795 18.7371C9.66917 18.7371 9.36309 18.8093 9.08549 18.948L5.4265 20.778C5.27385 20.8543 5.10422 20.8902 4.93375 20.8824C4.76328 20.8746 4.59765 20.8233 4.45261 20.7334C4.30757 20.6435 4.18796 20.518 4.10514 20.3688C4.02233 20.2196 3.97907 20.0517 3.9795 19.881V7.11802C3.97959 6.93235 4.03138 6.75039 4.12905 6.59249C4.22672 6.43459 4.36641 6.30701 4.5325 6.22402L9.08549 3.94702C9.36309 3.8083 9.66917 3.73608 9.9795 3.73608C10.2898 3.73608 10.5959 3.8083 10.8735 3.94702L15.0855 6.05302Z"
        stroke="#4D6280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.9795 6.26404V21.264"
        stroke="#4D6280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9.97949 3.73596V18.736"
        stroke="#4D6280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

function GalleryIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[24px] h-[24px]"
    >
      <path
        d="M19.3906 3.5H5.39062C4.28606 3.5 3.39062 4.39543 3.39062 5.5V19.5C3.39062 20.6046 4.28606 21.5 5.39062 21.5H19.3906C20.4952 21.5 21.3906 20.6046 21.3906 19.5V5.5C21.3906 4.39543 20.4952 3.5 19.3906 3.5Z"
        stroke="#4D6280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9.39062 11.5C10.4952 11.5 11.3906 10.6046 11.3906 9.5C11.3906 8.39543 10.4952 7.5 9.39062 7.5C8.28606 7.5 7.39062 8.39543 7.39062 9.5C7.39062 10.6046 8.28606 11.5 9.39062 11.5Z"
        stroke="#4D6280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M21.3906 15.4999L18.3046 12.4139C17.9296 12.039 17.421 11.8284 16.8906 11.8284C16.3603 11.8284 15.8517 12.039 15.4766 12.4139L6.39062 21.4999"
        stroke="#4D6280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export default Footer;
