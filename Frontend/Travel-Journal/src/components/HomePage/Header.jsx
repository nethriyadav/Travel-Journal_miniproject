"use client";
import React from "react";
import SearchBar from "./SearchBar";
import ActionButton from "./ActionButton";
import { Link } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Header() {
  const {isLoggedIn}=useContext(UserContext);
  return (
    <header className="fixed inset-x-0 top-0 border-b border-solid backdrop-blur bg-gray-50 bg-opacity-80 border-b-slate-200 border-b-opacity-40 h-[65px] z-[100]">
      <div className="flex justify-between items-center px-4 py-3 mx-auto my-0 max-w-[1400px] max-sm:p-3">
   
        <h1 className="text-xl text-slate-700 flex items-center space-x-2">
          <Link to="/"> <MdOutlineExplore className="text-4xl" /></Link>
          <Link to="/" className="text-slate-700">Home</Link>
        </h1>

      
        <div className="flex-1 flex justify-center">
          {location.pathname==="/"&&<SearchBar />}
        </div>

      
        <div className="flex gap-x-3">
          {location.pathname=="/"&&<ActionButton text="New Entry" primary={true} to={isLoggedIn ? "/newEntry": "/login"} />}
          {!isLoggedIn && <ActionButton text="Login"  to="/login" />}
          {!isLoggedIn && <ActionButton text="Sign Up" primary={true} to="/signup" />}
        </div>
      </div>
    </header>
  );
}

export default Header;
