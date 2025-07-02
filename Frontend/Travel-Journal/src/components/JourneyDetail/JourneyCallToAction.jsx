import React from "react";
import { Link } from "react-router-dom";

function JourneyCallToAction() {
  return (
    <section className="mb-12 text-center">
      <h3 className="mb-6 text-xl font-medium text-slate-700">
        Ready to create your own journey?
      </h3>
      <button className="px-4 py-3 text-sm font-medium bg-blue-600 rounded-2xl cursor-pointer border-[none] text-slate-50">
       <Link to="/newEntry"> Start a New Entry</Link>
      </button>
    </section>
  );
}

export default JourneyCallToAction;
