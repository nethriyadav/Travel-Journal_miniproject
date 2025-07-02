import React from "react";

function InputField({ label, type, placeholder, icon, helperText, value, onChange }) {
  return (
    <>
      <label className="mb-2 text-sm text-slate-700">{label}</label>
      <div className="flex relative items-center w-full h-10 bg-gray-50 rounded-2xl border border-solid border-slate-200">
        <div className="absolute left-3">{icon}</div>
        <input
          type={type}
          placeholder={placeholder}
          className="py-0 pr-3 pl-10 text-sm border-none outline-none bg-transparent w-full h-full text-slate-600"
          aria-label={label}
          value={value}           
          onChange={onChange}  
        />
      </div>
      {helperText && (
        <p className="mt-1 text-xs text-slate-600">{helperText}</p>
      )}
    </>
  );
}

export default InputField;
