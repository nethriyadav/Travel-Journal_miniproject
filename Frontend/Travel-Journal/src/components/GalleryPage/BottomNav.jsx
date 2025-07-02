"use client";
import React from "react";
import { HomeIcon, JournalIcon, MapIcon, GalleryActiveIcon } from "./Icons";

function BottomNav() {
  return (
    <nav className="box-border flex fixed bottom-0 justify-center items-center p-0 m-0 w-full h-16 border-t border-solid backdrop-blur bg-gray-50 bg-opacity-90 border-t-slate-200 border-t-opacity-40">
      <NavItem icon={<HomeIcon />} label="Home" />
      <NavItem icon={<JournalIcon />} label="Journal" />
      <NavItem icon={<MapIcon />} label="Map" />
      <NavItem icon={<GalleryActiveIcon />} label="Gallery" active />
      <NavItem
        icon={
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd4cfe83510062f071e2ca1e3bd937375124e93"
            className="box-border p-0 m-0 w-7 h-7 rounded-full"
            alt="Profile"
          />
        }
        label="Profile"
      />
    </nav>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`box-border flex flex-col gap-1 justify-center items-center p-0 m-0 text-xs font-medium cursor-pointer h-[63px] ${
        active ? "text-blue-600" : "text-slate-600"
      } w-[102px]`}
    >
      <div className="box-border p-0 m-0">{icon}</div>
      <span className="box-border p-0 m-0">{label}</span>
    </button>
  );
}

export default BottomNav;
