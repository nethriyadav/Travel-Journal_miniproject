import React from "react";
import MemoryCard from "./MemoryCard";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function RecentEntriesSection() {
  const { user } = useContext(UserContext);

  if (!user || !user.data || !user.data.journals) return null;

  const recentEntries = user.data.journals.map((entry) => ({
    id: entry.id || entry._id,
    title: entry.title,
    date: new Date(entry.createdAt).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    location: entry.location?.name,
    description: entry.location.description,
    mood: entry.feelings,
    image: entry.photos,
    user: {
      name: user.data.name,
      photo: user.data.photo,
    },
  }));

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl text-slate-700 text-opacity-90">
        Recent Entries
      </h2>
      <div className="grid gap-6 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {recentEntries.map((entry) => (
          <MemoryCard
            key={entry.id}
            id={entry.id}
            title={entry.title}
            date={entry.date}
            location={entry.location.split(" ")[0]}
            description={entry.description}
            mood={entry.mood}
            image={entry.image}
            featured={false}
            user={entry.user}
          />
        ))}
      </div>
    </section>
  );
}

export default RecentEntriesSection;
