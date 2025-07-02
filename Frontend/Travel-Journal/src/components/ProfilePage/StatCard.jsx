import React from "react";

function StatCard({ value, label }) {
  return (
    <article className="flex flex-col justify-center items-center border shadow-md backdrop-blur-[6px] bg-white bg-opacity-80 border-white border-opacity-30 h-[90px]">
      <h3 className="text-3xl font-bold text-slate-700">{value}</h3>
      <p className="text-sm text-slate-600">{label}</p>
    </article>
  );
}

export default StatCard;
