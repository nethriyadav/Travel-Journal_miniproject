import React from "react";

function SettingsSection({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="mb-5 text-lg font-medium leading-7 text-slate-700">
        {title}
      </h2>
      {children}
      <hr className="mb-6 w-full h-px bg-slate-200" />
    </section>
  );
}

export default SettingsSection;
