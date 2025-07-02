import React from "react";

function Tag({ text, color = "blue" }) {
  const colorClasses = {
    blue: "text-blue-800 bg-blue-100",
    green: "text-green-800 bg-green-100",
    red: "text-red-800 bg-red-100",
    yellow: "text-yellow-800 bg-yellow-100",
    purple: "text-purple-800 bg-purple-100",
  };

  return (
    <span
      className={`px-2.5 py-0.5 text-xs font-medium ${colorClasses[color]} rounded-full`}
    >
      {text}
    </span>
  );
}

export default Tag;
