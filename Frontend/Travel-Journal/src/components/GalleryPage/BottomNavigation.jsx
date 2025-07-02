import React from "react";
import NavItem from "./NavItem";

function BottomNavigation() {
  const navItems = [
    {
      name: "Home",
      icon: "<svg id=&quot;4:273&quot; layer-name=&quot;SVG&quot; width=&quot;25&quot; height=&quot;25&quot; viewBox=&quot;0 0 25 25&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[24px] h-[24px]&quot;> <path d=&quot;M15.1899 21.84V13.84C15.1899 13.5747 15.0846 13.3204 14.897 13.1329C14.7095 12.9453 14.4552 12.84 14.1899 12.84H10.1899C9.92472 12.84 9.67037 12.9453 9.48283 13.1329C9.2953 13.3204 9.18994 13.5747 9.18994 13.84V21.84&quot; stroke=&quot;#4D6280&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M3.18994 10.8399C3.18987 10.549 3.25328 10.2616 3.37573 9.99765C3.49818 9.73374 3.67674 9.49973 3.89894 9.31193L10.8989 3.31293C11.2599 3.00784 11.7173 2.84045 12.1899 2.84045C12.6626 2.84045 13.12 3.00784 13.4809 3.31293L20.4809 9.31193C20.7031 9.49973 20.8817 9.73374 21.0042 9.99765C21.1266 10.2616 21.19 10.549 21.1899 10.8399V19.8399C21.1899 20.3704 20.9792 20.8791 20.6042 21.2541C20.2291 21.6292 19.7204 21.8399 19.1899 21.8399H5.18994C4.65951 21.8399 4.1508 21.6292 3.77573 21.2541C3.40066 20.8791 3.18994 20.3704 3.18994 19.8399V10.8399Z&quot; stroke=&quot;#4D6280&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
      active: false,
    },
    {
      name: "Journal",
      icon: "<svg id=&quot;4:280&quot; layer-name=&quot;SVG&quot; width=&quot;25&quot; height=&quot;25&quot; viewBox=&quot;0 0 25 25&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[24px] h-[24px]&quot;> <path d=&quot;M12.5903 7.83997V21.84&quot; stroke=&quot;#4D6280&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M3.59033 18.84C3.32512 18.84 3.07076 18.7346 2.88323 18.5471C2.69569 18.3595 2.59033 18.1052 2.59033 17.84V4.83997C2.59033 4.57475 2.69569 4.3204 2.88323 4.13286C3.07076 3.94532 3.32512 3.83997 3.59033 3.83997H8.59033C9.6512 3.83997 10.6686 4.26139 11.4188 5.01154C12.1689 5.76168 12.5903 6.7791 12.5903 7.83997C12.5903 6.7791 13.0118 5.76168 13.7619 5.01154C14.5121 4.26139 15.5295 3.83997 16.5903 3.83997H21.5903C21.8555 3.83997 22.1099 3.94532 22.2974 4.13286C22.485 4.3204 22.5903 4.57475 22.5903 4.83997V17.84C22.5903 18.1052 22.485 18.3595 22.2974 18.5471C22.1099 18.7346 21.8555 18.84 21.5903 18.84H15.5903C14.7947 18.84 14.0316 19.156 13.469 19.7186C12.9064 20.2813 12.5903 21.0443 12.5903 21.84C12.5903 21.0443 12.2743 20.2813 11.7117 19.7186C11.149 19.156 10.386 18.84 9.59033 18.84H3.59033Z&quot; stroke=&quot;#4D6280&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
      active: false,
    },
    {
      name: "Map",
      icon: "<svg id=&quot;4:287&quot; layer-name=&quot;SVG&quot; width=&quot;25&quot; height=&quot;25&quot; viewBox=&quot;0 0 25 25&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[24px] h-[24px]&quot;> <path d=&quot;M15.086 6.39298C15.3636 6.5317 15.6697 6.60391 15.98 6.60391C16.2903 6.60391 16.5964 6.5317 16.874 6.39298L20.533 4.56298C20.6856 4.48674 20.8551 4.45079 21.0255 4.45855C21.1959 4.46631 21.3614 4.51752 21.5064 4.60731C21.6515 4.69711 21.7711 4.8225 21.854 4.97156C21.9369 5.12063 21.9802 5.28842 21.98 5.45898V18.223C21.9799 18.4086 21.9281 18.5906 21.8304 18.7485C21.7328 18.9064 21.5931 19.034 21.427 19.117L16.874 21.394C16.5964 21.5327 16.2903 21.6049 15.98 21.6049C15.6697 21.6049 15.3636 21.5327 15.086 21.394L10.874 19.288C10.5964 19.1493 10.2903 19.0771 9.97998 19.0771C9.66965 19.0771 9.36358 19.1493 9.08598 19.288L5.42698 21.118C5.27434 21.1943 5.10471 21.2302 4.93424 21.2224C4.76377 21.2146 4.59814 21.1633 4.4531 21.0734C4.30806 20.9835 4.18844 20.8579 4.10563 20.7087C4.02282 20.5595 3.97956 20.3916 3.97998 20.221V7.45798C3.98008 7.27232 4.03187 7.09035 4.12954 6.93246C4.22721 6.77456 4.3669 6.64697 4.53298 6.56398L9.08598 4.28698C9.36358 4.14826 9.66965 4.07605 9.97998 4.07605C10.2903 4.07605 10.5964 4.14826 10.874 4.28698L15.086 6.39298Z&quot; stroke=&quot;#4D6280&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M15.98 6.604V21.604&quot; stroke=&quot;#4D6280&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M9.97998 4.07593V19.0759&quot; stroke=&quot;#4D6280&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
      active: false,
    },
    {
      name: "Gallery",
      icon: "<svg id=&quot;4:295&quot; layer-name=&quot;SVG&quot; width=&quot;25&quot; height=&quot;25&quot; viewBox=&quot;0 0 25 25&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[24px] h-[24px]&quot;> <path d=&quot;M19.3901 3.83997H5.39014C4.28557 3.83997 3.39014 4.7354 3.39014 5.83997V19.84C3.39014 20.9445 4.28557 21.84 5.39014 21.84H19.3901C20.4947 21.84 21.3901 20.9445 21.3901 19.84V5.83997C21.3901 4.7354 20.4947 3.83997 19.3901 3.83997Z&quot; stroke=&quot;#0D6DFD&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M9.39014 11.84C10.4947 11.84 11.3901 10.9445 11.3901 9.83997C11.3901 8.7354 10.4947 7.83997 9.39014 7.83997C8.28557 7.83997 7.39014 8.7354 7.39014 9.83997C7.39014 10.9445 8.28557 11.84 9.39014 11.84Z&quot; stroke=&quot;#0D6DFD&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M21.3901 15.8399L18.3041 12.7539C17.9291 12.379 17.4205 12.1683 16.8901 12.1683C16.3598 12.1683 15.8512 12.379 15.4761 12.7539L6.39014 21.8399&quot; stroke=&quot;#0D6DFD&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
      active: true,
    },
  ];

  return (
    <nav className="flex justify-center items-center h-16 border backdrop-blur-[[8px]] bg-gray-50 bg-opacity-90 border-slate-200 border-opacity-40">
      <div className="flex justify-center items-start">
        <div className="flex">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              name={item.name}
              icon={item.icon}
              active={item.active}
            />
          ))}
          <ProfileNavItem />
        </div>
      </div>
    </nav>
  );
}

export default BottomNavigation;
