import React from "react";
import NavItem from "./NavItem";

function BottomNavigation() {
  return (
    <nav className="flex fixed bottom-0 justify-center px-0 py-px w-full border-t border-solid backdrop-blur bg-gray-50 bg-opacity-90 border-t-slate-200 border-t-opacity-40">
      <NavItem icon="home" label="Home" />
      <NavItem icon="journal" label="Journal" />
      <NavItem icon="map" label="Map" />
      <NavItem icon="gallery" label="Gallery" />
      <NavItem
        label="Profile"
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd4cfe83510062f071e2ca1e3bd937375124e93"
      />
    </nav>
  );
}

export default BottomNavigation;
