import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

function ProfileSection() {
  const { user } = useContext(UserContext);
  if (!user || !user.data) return <p>Loading...</p>;
  console.log("I am ",user);
  return (
    <section className="mb-6">
      <h2 className="mb-5 text-lg font-medium leading-7 text-slate-700">
        Profile
      </h2>

      <div className="mb-10">
        <label className="mb-3 text-sm font-medium leading-4 text-slate-700 block">
          Display Name
        </label>
        <div className="px-3.5 py-3 w-full h-10 text-sm bg-gray-50 rounded-2xl border border-slate-200 text-slate-700">
          {user.data.name}
        </div>
      </div>

      <div className="mb-10">
        <label className="mb-3 text-sm font-medium leading-4 text-slate-700 block">
          Email
        </label>
        <div className="px-3.5 py-3 w-full h-10 text-sm bg-gray-50 rounded-2xl border border-slate-200 text-slate-700">
          {user.data.email}
        </div>
      </div>

      <Link
        to="/profile"
        className="block text-center mb-6 w-full h-10 text-sm font-medium bg-gray-50 rounded-2xl border border-slate-200 text-slate-700 hover:bg-slate-100"
      >
        View Profile
      </Link>

      <Link
        to="/update-profile"
        className="block text-center mb-6 w-full h-10 text-sm font-medium bg-gray-50 rounded-2xl border border-slate-200 text-slate-700 hover:bg-slate-100"
      >
        Update Profile
      </Link>
    </section>
  );
}

export default ProfileSection;
