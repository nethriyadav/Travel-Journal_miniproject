import React, { createContext, useState } from "react";
import axios from "axios";

export const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const [journals, setJournals] = useState([]);

  const fetchJournals = async () => {
    try {
      const res = await axios.get("https://travel-journal-w8vd.onrender.com/api/v1/journals", {
        withCredentials: true,
      });
      setJournals(res.data.data); // Make sure this matches your actual API response
    } catch (err) {
      console.error("Failed to fetch journals", err);
    }
  };

  const addJournal = (newJournal) => {
    setJournals((prev) => [newJournal, ...prev]);
  };

  return (
    <JournalContext.Provider value={{ journals, fetchJournals, addJournal }}>
      {children}
    </JournalContext.Provider>
  );
};
