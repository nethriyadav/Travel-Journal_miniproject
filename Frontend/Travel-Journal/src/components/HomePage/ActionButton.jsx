import React from "react";
import { Link } from "react-router-dom";

function ActionButton({ text, primary = false,to }) {
  const baseClasses =
    "px-4 py-3 text-sm font-medium rounded-2xl cursor-pointer border-[none]";
  const primaryClasses = "bg-blue-600 text-slate-50";
  const secondaryClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300";
  const hoverClasses = "hover:opacity-90 hover:scale-110";

  const buttonClasses = `${baseClasses} ${
    primary ? primaryClasses : secondaryClasses
  } ${hoverClasses}`;

  return (
      <Link to={to} className={buttonClasses} >{text}</Link>
  );
}

export default ActionButton;
