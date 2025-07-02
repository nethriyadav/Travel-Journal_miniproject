"use client";
import React, { useState } from "react";

function ToggleSwitch({ enabled: initialEnabled = false }) {
  const [enabled, setEnabled] = useState(initialEnabled);

  const toggleSwitch = () => {
    setEnabled(!enabled);
  };

  return (
    <button
      onClick={toggleSwitch}
      className={`inline-flex items-center py-0.5 w-11 h-6 rounded-full ${
        enabled
          ? "justify-end pr-0.5 pl-6 bg-blue-600"
          : "justify-start pr-6 pl-0.5 bg-slate-200"
      }`}
      aria-checked={enabled}
      role="switch"
    >
      <span className="w-5 h-5 bg-gray-50 rounded-full shadow-lg" />
    </button>
  );
}

export default ToggleSwitch;
