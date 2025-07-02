import React, { useState, useEffect } from "react";
import { HomeIcon, JournalIcon, MapIcon, GalleryIcon } from "./Icons";
import { useNavigate, useLocation } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { LogOut, Settings, User } from "lucide-react";
import { logout } from "../api/authService";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

function BottomNavigation() {
  const {user,setIsLoggedIn,defaultPic}=useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(getActiveTab(location.pathname));

  function getActiveTab(pathname) {
    switch (pathname) {
      case "/":
        return "Home";
      case "/newEntry":
        return "Journal";
      case "/journey-map":
        return "Map";
      case "/gallery":
        return "Gallery";
      case "/profile":
        return "Profile";
      default:
        return "";
    }
  }

  useEffect(() => {
    setActiveTab(getActiveTab(location.pathname));
  }, [location.pathname]);



  return (
    <nav className="flex fixed inset-x-0 bottom-0 justify-center items-center h-16 border-t backdrop-blur bg-gray-50 bg-opacity-90 border-t-gray-200 z-50">
      <NavItem
        icon={<HomeIcon active={activeTab === "Home"} />}
        label="Home"
        active={activeTab === "Home"}
        onClick={() => navigate("/")}
      />
      <NavItem
        icon={<JournalIcon active={activeTab === "Journal"} />}
        label="Journal"
        active={activeTab === "Journal"}
        onClick={() => navigate("/newEntry")}
      />
      <NavItem
        icon={<MapIcon active={activeTab === "Map"} />}
        label="Map"
        active={activeTab === "Map"}
        onClick={() => navigate("/journey-map")}
      />
      <NavItem
        icon={<GalleryIcon active={activeTab === "Gallery"} />}
        label="Gallery"
        active={activeTab === "Gallery"}
        onClick={() => navigate("/gallery")}
      />

      {/* Profile Popover */}
      <Popover className="relative">
        <PopoverButton className="flex flex-col gap-1 items-center text-xs font-medium cursor-pointer w-[102px] outline-none focus:ring-0">
          <img
            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd4cfe83510062f071e2ca1e3bd937375124e93"
            src={
              user?.data?.photo
                ? user.data.photo.startsWith("http")
                  ? user.data.photo
                  : `${baseUrl}/img/users/${user.data.photo}`
                : defaultPic
            }
            
            alt="Profile"
            className="w-7 h-7 rounded-full border-2 border-gray-300"
          />
          <span className={activeTab === "Profile" ? "text-blue-600" : "text-slate-600"}>
            Profile
          </span>
        </PopoverButton>

        <PopoverPanel className="absolute bottom-16 right-[-20px] bg-white shadow-md rounded-lg w-40 z-50">
          {({ close }) => (
            <div className="flex flex-col p-2 text-sm">
              <button
                onClick={() => {
                  close();
                  navigate("/profile");
                }}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded"
              >
                <User className="w-4 h-4" />
                You
              </button>

              <button
                onClick={() => {
                  close();
                  navigate("/settings");
                }}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded"
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>

              <button
                onClick={async (e) => {
                  e.preventDefault();
                  // alert("Logging Out...");
                  toast.success("👋 Logged out successfully!");
                  await logout();
                  close();
                  setIsLoggedIn(false);
                  navigate("/");
                }}
                className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-100 rounded"
              >
                <LogOut className="w-4 h-4" />
                Log Out
              </button>
            </div>
          )}
        </PopoverPanel>
      </Popover>
    </nav>
  );
}

function NavItem({ icon, label, active = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col gap-1 items-center text-xs font-medium cursor-pointer w-[102px] ${
        active ? "text-blue-600" : "text-slate-600"
      }`}
    >
      <div>{icon}</div>
      <span>{label}</span>
    </div>
  );
}

export default BottomNavigation;
