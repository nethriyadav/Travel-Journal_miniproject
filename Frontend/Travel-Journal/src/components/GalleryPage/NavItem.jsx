import React from "react";

function NavItem({ label, icon, active }) {
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

export default NavItem;
