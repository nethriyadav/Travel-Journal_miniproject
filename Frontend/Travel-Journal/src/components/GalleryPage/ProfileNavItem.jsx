import React from "react";

function ProfileNavItem() {
  return (
    <a
      href="#"
      className="flex flex-col gap-0.5 items-center py-2 h-[63px] text-slate-600 w-[102px]"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd4cfe83510062f071e2ca1e3bd937375124e93"
        alt="Profile"
        className="w-[28px] h-[28px] rounded-full"
      />
      <span className="text-xs font-medium">Profile</span>
    </a>
  );
}

export default ProfileNavItem;
