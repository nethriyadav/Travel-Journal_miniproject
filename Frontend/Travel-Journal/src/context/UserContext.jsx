
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

// Create the User Context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const defaultPic=`${baseUrl}/img/users/default.jpg`;

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://travel-journal-w8vd.onrender.com/api/v1/users/me", {
          withCredentials: true,
        });
        if (res.data.status === "Success") {
          setUser(res.data.data); // assuming the user data is in res.data.data
          setIsLoggedIn(true);
        }
      } catch (err) {
        setIsLoggedIn(false);
        setUser(null);
        if (err.response && err.response.status !== 401) {
          console.error("Request failed:", err);
        }
      }
    };

    fetchUser();
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={{ user,setUser, isLoggedIn,setIsLoggedIn, defaultPic }}>
      {children}
    </UserContext.Provider>
  );
};
