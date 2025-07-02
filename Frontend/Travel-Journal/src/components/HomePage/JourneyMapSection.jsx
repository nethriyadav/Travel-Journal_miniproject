import React from "react";
import { useEffect, useState,useContext } from "react";
import { getAllJourneys } from "../../api/journeyDetail";
import MapView from "../JourneysMap/MapView";
import { UserContext } from "../../context/UserContext";

function JourneyMapSection() {
  const [journals, setJournals] = useState([]);
  const { user, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
      if (user?.data?.journals) {
        setJournals(user.data.journals);
      }
    }, [user]);
  

  // useEffect(() => {
  //   const fetchJournals = async () => {
  //     const data = await getAllJourneys();
  //     setJournals(data);
  //   };
  //   fetchJournals();
  // }, []);
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl text-slate-700 text-opacity-90">
        Your Journey
      </h2>
      <MapView journals={journals} />
    </section>
  );
}

export default JourneyMapSection;
