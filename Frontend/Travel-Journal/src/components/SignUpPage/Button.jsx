import React from "react";

function Button({ children, type = "button", fullWidth = false, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`mt-3 h-10 text-sm font-medium bg-blue-600 rounded-2xl cursor-pointer border-none text-slate-50 ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
