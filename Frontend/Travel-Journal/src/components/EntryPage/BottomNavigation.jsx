import React from "react";

function BottomNavigation() {
  const navItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3be582b6f112756018775cb909b42cba6ad2cef6?placeholderIfAbsent=true&apiKey=a98f7f020f4a404481c6d8b704de868b",
      label: "Home",
      active: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3770c7e87392d79d16d5f67f6e0e48a6cdaf4a00?placeholderIfAbsent=true&apiKey=a98f7f020f4a404481c6d8b704de868b",
      label: "Journal",
      active: true,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/68219c5f2365aec5908ef4f27e490fa4562d00df?placeholderIfAbsent=true&apiKey=a98f7f020f4a404481c6d8b704de868b",
      label: "Map",
      active: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dfc145dd394015b055972cc38072fde56851c329?placeholderIfAbsent=true&apiKey=a98f7f020f4a404481c6d8b704de868b",
      label: "Gallery",
      active: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1be9c446b58cdaadc6b8592afa630195da843932?placeholderIfAbsent=true&apiKey=a98f7f020f4a404481c6d8b704de868b",
      label: "Profile",
      active: false,
      isProfile: true,
    },
  ];

  return (
    <nav className="flex flex-col justify-center items-center px-16 py-2.5 mt-8 w-full text-xs leading-none whitespace-nowrap border-t bg-gray-50 bg-opacity-90 border-slate-200 border-opacity-40 text-slate-600 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 items-start max-w-full w-[445px]">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            label={item.label}
            active={item.active}
            isProfile={item.isProfile}
          />
        ))}
      </div>
    </nav>
  );
}

function NavItem({ icon, label, active, isProfile }) {
  return (
    <div
      className={`flex-1 ${active ? "text-blue-600" : ""} ${
        !isProfile ? "self-stretch my-auto" : "text-center"
      }`}
    >
      <img
        src={icon}
        className={`object-contain ${
          isProfile ? "w-7 rounded-full" : "w-6"
        } aspect-square ${label === "Home" ? "max-md:mr-1" : ""} ${
          label === "Map" ? "max-md:mr-0.5" : ""
        } ${label === "Gallery" ? "max-md:mr-2 max-md:ml-2" : ""} ${
          isProfile ? "max-md:mr-1" : ""
        }`}
        alt={`${label} icon`}
      />
      <div className={`${isProfile ? "mt-1" : "mt-2"}`}>{label}</div>
    </div>
  );
}

export default BottomNavigation;
