import React from "react";
import { CalendarIcon, LocationIcon } from "../Icons";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const baseURL = import.meta.env.VITE_API_BASE_URL;

const moodEmojis = {
  happy: "😊",
  excited: "🎉",
  nostalgic: "💭",
  peaceful: "😌",
  adventurous: "🌍",
  amazed: "😲",
  tired: "😴",
  reflective: "🧠",



};

// function MemoryCard({ title, id, date, location, description, mood, image }) {
//   return (
//     <article className="overflow-hidden bg-white rounded-2xl border border-solid border-white border-opacity-30 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transform transition-transform duration-300 hover:scale-105">
//       <div className="relative h-[218px]">
//         <Link to={`/journey-details/${id}`}>
//           <img
//             // src={image}
//             src={image ? `${baseURL}${image}` : "/fallback.jpg"}
//             alt={title}
//             className="object-cover bg-neutral-200 size-full"
//           />
//         </Link>
//         <div className="absolute top-4 right-4 px-2.5 py-0.5 text-xs font-medium rounded-full bg-white bg-opacity-80 flex gap-1 flex-wrap justify-end">
//           {(Array.isArray(mood) ? mood : [mood]).map((m, index) => (
//             <span key={index}>
//               {moodEmojis[m]} {m}
//             </span>
//           ))}
//         </div>
//       </div>
//       <div className="p-4">
//         <h3 className="mb-2.5 text-lg text-slate-700">
//           <Link to={`/journey-details/${id}`}>{title}</Link>
//         </h3>
//         <div className="flex gap-4 mb-2 text-sm text-slate-600">
//           <div className="flex gap-1 items-center">
//             <CalendarIcon />
//             <span>{date}</span>
//           </div>
//           <div className="flex gap-1 items-center">
//             <LocationIcon />
//             <span>{location}</span>
//           </div>
//         </div>
//         <p className="text-sm leading-snug text-slate-600">{description}</p>
//       </div>
//     </article>
//   );
// }


function MemoryCard({ title, id, date, location, description, mood, image, user }) {
  return (
    <article className="overflow-hidden bg-white rounded-2xl border border-solid border-white border-opacity-30 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transform transition-transform duration-300 hover:scale-105">
      <div className="relative h-[218px]">
        <Link to={`/journey-details/${id}`}>
          <img
            src={image ? `${baseURL}${image}` : "/fallback.jpg"}
            alt={title}
            className="object-cover bg-neutral-200 size-full"
          />
        </Link>
        <div className="absolute top-4 right-4 px-2.5 py-0.5 text-xs font-medium rounded-full bg-white bg-opacity-80 flex gap-1 flex-wrap justify-end">
          {(Array.isArray(mood) ? mood : [mood]).map((m, index) => (
            <span key={index}>
              {moodEmojis[m]} {m}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-2.5 text-lg text-slate-700">
          <Link to={`/journey-details/${id}`}>{title}</Link>
        </h3>
        <div className="flex gap-4 mb-2 text-sm text-slate-600">
          <div className="flex gap-1 items-center">
            <CalendarIcon />
            <span>{date}</span>
          </div>
          <div className="flex gap-1 items-center">
            <LocationIcon />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-sm leading-snug text-slate-600">{description}</p>

        {/* 👇 User info added here */}
        {user && (
          <div className="flex items-center gap-2 mt-4">
            <img
              src={user.photo ? `${baseURL}/img/users/${user.photo}` : "/user-fallback.jpg"}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-slate-600 font-medium">{user.name}</span>
          </div>
        )}
      </div>
    </article>
  );
}


export default MemoryCard;
