import React,{useEffect,useState} from "react";
import StatCard from "./StatCard";
import { getUserInsights } from "../../api/analytics";

function StatsGrid() {

  const [insights, setInsights] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserInsights();
      setInsights(data);
    };
    fetchData();
  }, []);

  const stats =insights? [
    { value: insights.totalJournals, label: "Journal Entries" },
    { value: insights.placesVisited, label: " Places Visited" },
    { value: insights.totalPhotos, label: "Photos Shared" },
    { value: insights.daysJourneying, label: "Days Journeying" },
  ]:[];

  return (
    <section className="grid grid-cols-2 gap-4 mt-6 max-sm:grid-cols-1">
      {stats.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} />
      ))}
    </section>
  );
}

export default StatsGrid;
