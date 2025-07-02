import React from "react";

function IconButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center w-10 h-10 rounded-2xl cursor-pointer"
    >
      {children}
    </button>
  );
}

export default IconButton;
