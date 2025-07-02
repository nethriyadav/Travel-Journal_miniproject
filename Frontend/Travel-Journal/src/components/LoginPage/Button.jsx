"use client";
import React from "react";

/**
 * Reusable button component
 * @param {Object} props - Component props
 * @param {string} props.children - Button text or content
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.type - Button type (button, submit)
 */
const Button = ({
  children,
  onClick,
  fullWidth = false,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-10 text-sm font-medium leading-5 bg-blue-600 rounded-2xl text-slate-50 ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
