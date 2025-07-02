"use client";

import React from "react";
import { Link } from "react-router-dom";

const InputField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  icon,
  forgotPasswordLink,
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <label className="mb-3 text-sm font-medium text-slate-700">
          {label}
        </label>
        {forgotPasswordLink && (
           <Link to="/forgot" className="text-xs text-blue-600 no-underline"> {forgotPasswordLink}</Link>
        )}
      </div>
      <div className="relative h-10 bg-gray-50 rounded-2xl border border-solid border-slate-200">
        <div className="absolute left-3 top-3">{icon}</div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="py-0 pr-3 pl-10 text-sm border-[none] size-full text-slate-600 bg-transparent rounded-2xl outline-none"
        />
      </div>
    </div>
  );
};

export default InputField;
