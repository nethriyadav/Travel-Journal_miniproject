// pages/SearchResults.jsx

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchJournals } from "../api/journeyDetail";
import MemoryCard from "./HomePage/MemoryCard";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await searchJournals(query);
        setResults(res);
      } catch (err) {
        console.error("Error searching journals:", err);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <div className="pt-20 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6 text-slate-700">Search Results for: "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <div className="grid gap-6 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr]">
          {results.map((journey) => (
            <MemoryCard
              key={journey._id}
              id={journey._id}
              title={journey.title}
              date={new Date(journey.createdAt).toLocaleDateString("en-US")}
              location={journey.location?.name || "Unknown"}
              description={journey.location?.description}
              mood={journey.feelings}
              image={journey.photos}
            />
          ))}
        </div>
      ) : (
        <p>No journals found for "{query}"</p>
      )}
    </div>
  );
}

export default SearchResults;
