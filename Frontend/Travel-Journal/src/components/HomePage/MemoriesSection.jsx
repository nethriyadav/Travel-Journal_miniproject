import React, { useEffect, useState, useRef } from "react";
import MemoryCard from "./MemoryCard";
import { getAllJourneys } from "../../api/journeyDetail"; // adjust path if needed

function MemoriesSection() {
  const [journeys, setJourneys] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const fetchJourneys = async () => {
      try {
        const data = await getAllJourneys();
        setJourneys(data);
      } catch (err) {
        console.error("Failed to fetch journeys", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJourneys();
  }, []);

  // Mouse events for drag-scroll
  const handleMouseDown = (e) => {
    isDragging.current = true;
    carouselRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // control scroll speed
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    carouselRef.current.classList.remove("cursor-grabbing");
  };

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl text-slate-700 text-opacity-90">
        Featured Memories
      </h2>
      {loading ? (
        <p>Loading memories...</p>
      ) : (
        <div
          className="flex gap-6 overflow-x-auto whitespace-nowrap px-1 py-2 cursor-grab"
          style={{ scrollbarWidth: "none" }}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {journeys.map((journey) => (
            <div key={journey._id} className="inline-block w-[300px] shrink-0">
              <MemoryCard
                id={journey._id}
                title={journey.title}
                date={new Date(journey.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
                location={journey.location.name || "Unknown"}
                description={journey.location.description}
                mood={journey.feelings || []}
                image={journey.photos}
                user={journey.user}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MemoriesSection;
``






















// import React, { useEffect, useState } from "react";
// import MemoryCard from "./MemoryCard";
// import { getAllJourneys } from "../../api/journeyDetail"; // adjust path if needed

// function MemoriesSection() {
//   const [journeys, setJourneys] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJourneys = async () => {
//       try {
//         const data = await getAllJourneys();
//         setJourneys(data);
//       } catch (err) {
//         console.error("Failed to fetch journeys", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJourneys();
//   }, []);

//   console.log("This is Journals", journeys);

//   return (
//     <section className="mt-12">
//       <h2 className="mb-6 text-3xl text-slate-700 text-opacity-90">
//         Featured Memories
//       </h2>
//       {loading ? (
//         <p>Loading memories...</p>
//       ) : (
//         <div className="grid gap-6 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr]">
//           {journeys.map((journey) => (
//             <MemoryCard
//               key={journey._id}
//               id={journey._id}
//               title={journey.title}
//               date={new Date(journey.createdAt).toLocaleDateString("en-US", {
//                 month: "short",
//                 day: "numeric",
//                 year: "numeric",
//               })}
//               location={journey.location.name || "Unknown"}
//               description={journey.location.description}
//               mood={journey.feelings || []} // Changed from journey.mood
//               image={journey.photos} // assuming this is an array or a string URL
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// export default MemoriesSection;


























// import React, { useEffect, useState } from "react";
// import MemoryCard from "./MemoryCard";
// import { getAllJourneys } from "../../api/journeyDetail";// adjust path if needed

// function MemoriesSection() {
//   const [journeys, setJourneys] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJourneys = async () => {
//       try {
//         const data = await getAllJourneys();
//         setJourneys(data);
//       } catch (err) {
//         console.error("Failed to fetch journeys", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJourneys();
//   }, []);
//   console.log("This is Journals",journeys);

//   return (
//     <section className="mt-12">
//       <h2 className="mb-6 text-3xl text-slate-700 text-opacity-90">
//         Featured Memories
//       </h2>
//       {loading ? (
//         <p>Loading memories...</p>
//       ) : (
//         <div className="grid gap-6 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr]">
//           {journeys.map((journey) => (
//             <MemoryCard
//               key={journey._id}
//               id={journey._id}
//               title={journey.title}
//               date={new Date(journey.createdAt).toLocaleDateString("en-US", {
//                 month: "short",
//                 day: "numeric",
//                 year: "numeric",
//               })}
//               location={journey.location || "Unknown"}
//               description={journey.story.slice(0, 100) + "..."}
//               mood={journey.mood}
//               image={journey.photos} // Make sure this is correct from your backend
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// export default MemoriesSection;


















// import React from "react";
// import MemoryCard from "./MemoryCard";

// function MemoriesSection() {
//   const featuredMemories = [
//     {
//       id: 1,
//       title: "Sunrise at Mont Saint-Michel",
//       date: "Jun 12, 2023",
//       location: "Mont Saint-Michel, F…",
//       description:
//         "Waking up before dawn was worth it to see the golden light illuminate the abbey. The silhouette against the morning sky is something I'll never forget. The tide was low,…",
//       mood: "😌 peaceful",
//       image:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/ad555bb2d7a7e0279b6148a7958a6a8816e9d42d",
//     },
//     {
//       id: 2,
//       title: "Northern Lights in Iceland",
//       date: "Nov 20, 2022",
//       location: "Reykjavik, Iceland",
//       description:
//         "After three nights of clouds and disappointment, the sky finally cleared. We were about to head back to the hotel when the first green streaks appeared. Within…",
//       mood: "😲 amazed",
//       image:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/ad555bb2d7a7e0279b6148a7958a6a8816e9d42d",
//     },
//   ];

//   return (
//     <section className="mt-12">
//       <h2 className="mb-6 text-3xl text-slate-700 text-opacity-90">
//         Featured Memories
//       </h2>
//       <div className="grid gap-6 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr]">
//         {featuredMemories.map((memory) => (
//           <MemoryCard
//             key={memory.id}
//             title={memory.title}
//             date={memory.date}
//             location={memory.location}
//             description={memory.description}
//             mood={memory.mood}
//             image={memory.image}
//             featured={true}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default MemoriesSection;
