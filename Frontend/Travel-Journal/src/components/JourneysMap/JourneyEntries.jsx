import React from "react";
import JourneyEntryCard from "./JourneyEntryCard";

function JourneyEntries({ entries, onDelete }) {
  if (!entries || entries.length === 0) {
    return <p className="text-gray-500">No journey entries found.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 mt-6 max-md:grid-cols-2 max-sm:grid-cols-1">
      {entries.map((entry) => (
        <JourneyEntryCard
          key={entry._id}
          id={entry._id}
          location={entry.title || "Unknown location"}
          description={entry.location?.description || "No description"}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default JourneyEntries;

















// import React from "react";
// import JourneyEntryCard from "./JourneyEntryCard";

// function JourneyEntries({ entries }) {
//   return (
//     <div className="grid grid-cols-3 gap-4 mt-6 max-md:grid-cols-2 max-sm:grid-cols-1">
//       {entries.map((entry, index) => (
//         <JourneyEntryCard
//           key={entry._id || index}
//           id={entry.id}
//           location={entry.title || "Unknown location"}
//           description={entry.location.description || "No title"}
//         />
//       ))}
//     </div>
//   );
// }

// export default JourneyEntries;



















// import React from "react";
// import JourneyEntryCard from "./JourneyEntryCard";

// function JourneyEntries() {
//   const entries = [
//     {
//       location: "Mont Saint-Michel, France",
//       description: "Sunrise at Mont Saint-Michel",
//     },
//     {
//       location: "Kyoto, Japan",
//       description: "Getting Lost in Kyoto",
//     },
//     {
//       location: "Inca Trail, Peru",
//       description: "Hiking the Inca Trail",
//     },
//     {
//       location: "Bangkok, Thailand",
//       description: "Floating Markets of Bangkok",
//     },
//     {
//       location: "Reykjavik, Iceland",
//       description: "Northern Lights in Iceland",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-3 gap-4 mt-6 max-md:grid-cols-2 max-sm:grid-cols-1">
//       {entries.map((entry, index) => (
//         <JourneyEntryCard
//           key={index}
//           location={entry.location}
//           description={entry.description}
//         />
//       ))}
//     </div>
//   );
// }

// export default JourneyEntries;
