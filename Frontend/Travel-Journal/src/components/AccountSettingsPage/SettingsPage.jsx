"use client";
import React, { useContext } from "react";
import Header from "./Header";
import SettingsSection from "./SettingsSection";
import ProfileSection from "./ProfileSection";
import ToggleSwitch from "./ToggleSwitch";
import Footer from "./Footer";
import BottomNavigation from "../BottomNavigation";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../api/authService";
import { UserContext } from "../../context/UserContext"; // Import the context

function SettingsPage() {
  const navigate = useNavigate();
  const {setIsLoggedIn } = useContext(UserContext); // Access context

  return (
    <main className="flex flex-col bg-gray-50 min-h-screen">
      <section className="flex flex-col px-96 py-16 max-md:px-8 max-sm:px-4">
        <h1 className="mb-1 text-xl font-medium leading-7 text-slate-700">
          Account Settings
        </h1>
        <p className="mb-6 text-sm leading-5 text-slate-600">
          Manage your account preferences and settings
        </p>
        <hr className="mb-6 w-full h-px bg-slate-200" />

        <ProfileSection />

        <hr className="mb-6 w-full h-px bg-slate-200" />

        <SettingsSection title="Notifications">
          <div className="flex justify-between items-center mb-5">
            <div>
              <h3 className="mb-1.5 text-sm font-medium leading-4 text-slate-700">
                Push Notifications
              </h3>
              <p className="text-sm leading-5 text-slate-600">
                Receive notifications about your journal activity
              </p>
            </div>
            <ToggleSwitch enabled={true} />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="mb-1.5 text-sm font-medium leading-4 text-slate-700">
                Email Updates
              </h3>
              <p className="text-sm leading-5 text-slate-600">
                Get emails about travel tips and features
              </p>
            </div>
            <ToggleSwitch enabled={true} />
          </div>
        </SettingsSection>

        <SettingsSection title="Appearance">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="mb-1.5 text-sm font-medium leading-4 text-slate-700">
                Dark Mode
              </h3>
              <p className="text-sm leading-5 text-slate-600">
                Toggle between light and dark themes
              </p>
            </div>
            <ToggleSwitch enabled={false} />
          </div>
        </SettingsSection>

        <SettingsSection title="Privacy">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="mb-1.5 text-sm font-medium leading-4 text-slate-700">
                Location Sharing
              </h3>
              <p className="text-sm leading-5 text-slate-600">
                Allow the app to use your location for entries
              </p>
            </div>
            <ToggleSwitch enabled={true} />
          </div>
        </SettingsSection>

        <button
          onClick={async (e) => {
            e.preventDefault();
            await logout();
            setIsLoggedIn(false);
            navigate("/");
          }}
          className="flex gap-2 justify-center items-center px-0 py-2.5 w-full bg-red-500 rounded-2xl"
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[16px] h-[16px]"
          >
            <path
              d="M6.63965 14H3.97298C3.61936 14 3.28022 13.8595 3.03017 13.6095C2.78012 13.3594 2.63965 13.0203 2.63965 12.6667V3.33333C2.63965 2.97971 2.78012 2.64057 3.03017 2.39052C3.28022 2.14048 3.61936 2 3.97298 2H6.63965"
              stroke="#F8FAFC"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M11.3066 11.3333L14.64 7.99996L11.3066 4.66663"
              stroke="#F8FAFC"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M14.6396 8H6.63965"
              stroke="#F8FAFC"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>

          <span className="text-sm font-medium leading-5 text-slate-50">
            Log Out
          </span>
        </button>
      </section>

      <BottomNavigation />
    </main>
  );
}

export default SettingsPage;
