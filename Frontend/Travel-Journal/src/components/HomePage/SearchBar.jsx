import React, { useState } from "react";
import { SearchIcon } from "../Icons";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // If input is cleared, go back to home page
    if (value.trim() === "") {
      navigate("/");
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="relative w-[260px] max-sm:hidden">
      <div className="absolute left-2.5 top-2/4 -translate-y-2/4">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search journal entries..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleSearch}
        className="py-0 pr-4 pl-8 w-full h-10 text-sm bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600"
      />
    </div>
  );
}

export default SearchBar;




















// import React, { useState } from "react";
// import { SearchIcon } from "../Icons";
// import { searchJournals } from "../../api/journeyDetail";
// import { useNavigate } from "react-router-dom";

// function SearchBar() {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = async (e) => {
//     if (e.key === "Enter" && query.trim()) {
//       // Optional: you can also call searchJournals() directly here if you want results on this page
//       navigate(`/search?q=${encodeURIComponent(query.trim())}`);
//     }
//   };

//   return (
//     <div className="relative w-[260px] max-sm:hidden">
//       <div className="absolute left-2.5 top-2/4 -translate-y-2/4">
//         <SearchIcon />
//       </div>
//       <input
//         type="text"
//         placeholder="Search journal entries..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={handleSearch}
//         className="py-0 pr-4 pl-8 w-full h-10 text-sm bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600"
//       />
//     </div>
//   );
// }

// export default SearchBar;












// import React from "react";
// import { SearchIcon } from "../Icons";

// function SearchBar() {
//   return (
//     <div className="relative w-[260px] max-sm:hidden">
//       <div className="absolute left-2.5 top-2/4 -translate-y-2/4">
//         <SearchIcon />
//       </div>
//       <input
//         type="text"
//         placeholder="Search journal entries..."
//         className="py-0 pr-4 pl-8 w-full h-10 text-sm bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600"
//       />
//     </div>
//   );
// }

// export default SearchBar;
