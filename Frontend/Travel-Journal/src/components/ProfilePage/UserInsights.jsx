"use client";
import React from "react";
import { MapPin, Star, Timer } from "lucide-react";

const UserInsights = ({ insights }) => {
  if (!insights) return null;

  console.log(`This is insights: `,insights);
  const { mostLikedJournal, longestJournal, topLocations } = insights;

  const mostliked = Array.isArray(mostLikedJournal) ? mostLikedJournal[0] : mostLikedJournal;

  const visitedLocations = topLocations?.mostVisitedLocations || [];

  

  return (
    <div className="space-y-6 mt-6">
      {/* Most Liked Journal */}
      <div className="p-4 border rounded-2xl shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <h2 className="text-lg font-semibold">Most Liked Journal</h2>
        </div>
        <p className="text-sm text-gray-700">{mostliked?.title}</p>
        {/* <p className="text-xs text-gray-500">{mostLikedJournal?.location}</p> */}
        <button
          className="mt-2 px-4 py-1 bg-blue-500 text-white text-sm rounded-xl"
          onClick={() =>
            (window.location.href = `/journey-details/${mostliked._id}`)
          }
        >
          View Entry
        </button>
      </div>

      {/* Longest Journal */}
      <div className="p-4 border rounded-2xl shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-2">
          <Timer className="w-5 h-5 text-purple-500" />
          <h2 className="text-lg font-semibold">Longest Journal</h2>
        </div>
        <p className="text-sm text-gray-700">{longestJournal?.title}</p>
        {/* <p className="text-xs text-gray-500">{longestJournal?.location}</p> */}
        <button
          className="mt-2 px-4 py-1 bg-purple-600 text-white text-sm rounded-xl"
          onClick={() =>
            (window.location.href = `/journey-details/${longestJournal._id}`)
          }
        >
          View Entry
        </button>
      </div>

      {/* Top 5 Most Visited Locations */}
      <div className="p-4 border rounded-2xl shadow-sm bg-white">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-rose-500" />
          <h2 className="text-lg font-semibold">Top 5 Most Visited Places</h2>
        </div>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          {visitedLocations.length > 0 ? (
            visitedLocations.map((loc, idx) => (
              <li key={idx}>
                {loc._id} —{" "}
                <span className="text-gray-500">{loc.count} visits</span>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-500 italic">
              No location data available.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserInsights;
