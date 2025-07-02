"use client";
import React from "react";

/**
 * Reusable input field component with icon
 * @param {Object} props - Component props
 * @param {string} props.label - Input label
 * @param {string} props.type - Input type (text, email, password)
 * @param {string} props.placeholder - Input placeholder
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Input change handler
 * @param {string} props.iconSvg - SVG string for the icon
 * @param {string} props.rightElement - Optional element to display on the right side
 */
const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  iconSvg,
  rightElement,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium leading-4 text-slate-700">
          {label}
        </label>
      )}
      <div className="relative">
        <div className="flex items-center px-3 w-full h-10 bg-gray-50 rounded-2xl border border-slate-200">
          {iconSvg && (
            <div className="mr-3">
              <div dangerouslySetInnerHTML={{ __html: iconSvg }} />
            </div>
          )}
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full text-sm bg-transparent border-[nonepx] text-slate-600 outline-none"
          />
          {rightElement && <div className="ml-2">{rightElement}</div>}
        </div>
      </div>
    </div>
  );
};

export default InputField;
