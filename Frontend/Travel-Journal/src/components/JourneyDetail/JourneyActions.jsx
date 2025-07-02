import React, { useContext, useEffect, useState } from "react";
import { likeJournal, unlikeJournal, getJournalLikes } from "../../api/likes";
import { UserContext } from "../../context/UserContext";

function JourneyActions({ journal }) {
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const {user}=useContext(UserContext);

  useEffect(() => {
  
  console.log("Vinay");
  console.log(user);
    if (user &&user.data&& user.data.likedJournals) {

      console.log(user.data);
      setIsLiked(user.data.likedJournals.includes(journal._id));
    }

    const fetchLikes = async () => {
      try {
        const count = await getJournalLikes(journal._id);
        setLikesCount(count);
      } catch (err) {
        console.error("Failed to fetch likes:", err);
      }
    };

    fetchLikes();
  }, [journal._id,user]);

  const handleLikeToggle = async () => {
    if (loading) return;
    setLoading(true);

    try {
      if (isLiked) {
        await unlikeJournal(journal._id);
        setLikesCount((prev) => prev - 1);
      } else {
        await likeJournal(journal._id);
        setLikesCount((prev) => prev + 1);
      }
      setIsLiked(!isLiked);
    } catch (err) {
      console.error("Failed to toggle like:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-3 max-sm:flex-col">
      {/* Save Button */}
      <button
        onClick={handleLikeToggle}
        className="flex gap-4 items-center px-3.5 py-2.5 text-sm font-medium bg-gray-50 rounded-2xl border border-solid cursor-pointer border-slate-200 text-slate-700 max-sm:w-full"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={isLiked ? "#000000" : "none"}
          xmlns="http://www.w3.org/2000/svg"
          className="button-icon"
        >
          <path
            d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5928 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82671 2 9.00004 2.33333 8.00004 3.33333C7.00004 2.33333 6.17337 2 5.00004 2C4.02758 2 3.09495 2.38631 2.40732 3.07394C1.71968 3.76158 1.33337 4.69421 1.33337 5.66667C1.33337 7.2 2.33337 8.36667 3.33337 9.33333L8.00004 14L12.6667 9.33333Z"
            stroke={isLiked ? "#000000" : "#344256"}
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{isLiked ? "Liked" : "Save"}</span>
      </button>

      {/* Print Button */}
      <button
        onClick={() => window.print()}
        className="flex gap-4 items-center px-3.5 py-2.5 text-sm font-medium bg-gray-50 rounded-2xl border border-solid cursor-pointer border-slate-200 text-slate-700 max-sm:w-full"
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="button-icon"
        >
          <path
            d="M10.78 8H7.44666"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.78 5.33337H7.44666"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.4467 11.3333V3.33333C13.4467 2.97971 13.3062 2.64057 13.0561 2.39052C12.8061 2.14048 12.4669 2 12.1133 2H3.44666"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.1134 14H14.1134C14.467 14 14.8062 13.8595 15.0562 13.6095C15.3063 13.3594 15.4467 13.0203 15.4467 12.6667V12C15.4467 11.8232 15.3765 11.6536 15.2515 11.5286C15.1265 11.4036 14.9569 11.3333 14.7801 11.3333H8.1134C7.93659 11.3333 7.76702 11.4036 7.642 11.5286C7.51697 11.6536 7.44674 11.8232 7.44674 12V12.6667C7.44674 13.0203 7.30626 13.3594 7.05621 13.6095C6.80616 13.8595 6.46703 14 6.1134 14ZM6.1134 14C5.75978 14 5.42064 13.8595 5.17059 13.6095C4.92055 13.3594 4.78007 13.0203 4.78007 12.6667V3.33333C4.78007 2.97971 4.63959 2.64057 4.38955 2.39052C4.1395 2.14048 3.80036 2 3.44674 2C3.09311 2 2.75398 2.14048 2.50393 2.39052C2.25388 2.64057 2.1134 2.97971 2.1134 3.33333V4.66667C2.1134 4.84348 2.18364 5.01305 2.30867 5.13807C2.43369 5.2631 2.60326 5.33333 2.78007 5.33333H4.78007"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Print</span>
      </button>

      {/* Likes Count Button */}
      <div className="flex gap-4 items-center px-3.5 py-2.5 text-sm font-medium bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-700 max-sm:w-full">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="#344256"
          xmlns="http://www.w3.org/2000/svg"
          className="button-icon"
        >
          <path
            d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5928 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82671 2 9.00004 2.33333 8.00004 3.33333C7.00004 2.33333 6.17337 2 5.00004 2C4.02758 2 3.09495 2.38631 2.40732 3.07394C1.71968 3.76158 1.33337 4.69421 1.33337 5.66667C1.33337 7.2 2.33337 8.36667 3.33337 9.33333L8.00004 14L12.6667 9.33333Z"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{likesCount} Likes</span>
      </div>
    </div>
  );
}

export default JourneyActions;

// import React from "react";
// import { useEffect,useState } from "react";
// import { likeJournal,unlikeJournal,getJournalLikes } from "../../api/likes";
// import { useParams } from "react-router-dom";

// function JourneyActions({journal}) {

//   const [likesCount, setLikesCount] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchLikes = async () => {
//       try {
//         const count = await getJournalLikes(journal._id);
//         setLikesCount(count);
//       } catch (err) {
//         console.error("Failed to fetch likes:", err);
//       }
//     };

//     fetchLikes();
//   }, [journal._id]);

//   const handleLikeToggle = async () => {
//     if (loading) return;
//     setLoading(true);

//     try {
//       if (isLiked) {
//         await unlikeJournal(journal._id);
//         setLikesCount((prev) => prev - 1);
//       } else {
//         await likeJournal(journal._id);
//         setLikesCount((prev) => prev + 1);
//       }
//       setIsLiked(!isLiked);
//     } catch (err) {
//       console.error("Failed to toggle like:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex gap-3 max-sm:flex-col">
//       <button
//        onClick={handleLikeToggle}
//       className="flex gap-4 items-center px-3.5 py-2.5 text-sm font-medium bg-gray-50 rounded-2xl border border-solid cursor-pointer border-slate-200 text-slate-700 max-sm:w-full">
//         <svg
//           width="16"
//           height="16"
//           viewBox="0 0 16 16"
//           // fill="none"
//           fill={isLiked ? "#000000" : "none"}
//           xmlns="http://www.w3.org/2000/svg"
//           className="button-icon"
//         >
//           <path
//             d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5928 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82671 2 9.00004 2.33333 8.00004 3.33333C7.00004 2.33333 6.17337 2 5.00004 2C4.02758 2 3.09495 2.38631 2.40732 3.07394C1.71968 3.76158 1.33337 4.69421 1.33337 5.66667C1.33337 7.2 2.33337 8.36667 3.33337 9.33333L8.00004 14L12.6667 9.33333Z"
//             // stroke="#344256"
//             stroke={isLiked ? "#000000" : "#344256"}
//             strokeWidth="1.33333"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span>{isLiked ? "Liked" : "Save"} ({likesCount})</span>
//         {/* <span>Save</span> */}
//       </button>
//       <button className="flex gap-4 items-center px-3.5 py-2.5 text-sm font-medium bg-gray-50 rounded-2xl border border-solid cursor-pointer border-slate-200 text-slate-700 max-sm:w-full">
//         <svg
//           width="17"
//           height="16"
//           viewBox="0 0 17 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="button-icon"
//         >
//           <path
//             d="M10.78 8H7.44666"
//             stroke="#344256"
//             strokeWidth="1.33333"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M10.78 5.33337H7.44666"
//             stroke="#344256"
//             strokeWidth="1.33333"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M13.4467 11.3333V3.33333C13.4467 2.97971 13.3062 2.64057 13.0561 2.39052C12.8061 2.14048 12.4669 2 12.1133 2H3.44666"
//             stroke="#344256"
//             strokeWidth="1.33333"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M6.1134 14H14.1134C14.467 14 14.8062 13.8595 15.0562 13.6095C15.3063 13.3594 15.4467 13.0203 15.4467 12.6667V12C15.4467 11.8232 15.3765 11.6536 15.2515 11.5286C15.1265 11.4036 14.9569 11.3333 14.7801 11.3333H8.1134C7.93659 11.3333 7.76702 11.4036 7.642 11.5286C7.51697 11.6536 7.44674 11.8232 7.44674 12V12.6667C7.44674 13.0203 7.30626 13.3594 7.05621 13.6095C6.80616 13.8595 6.46703 14 6.1134 14ZM6.1134 14C5.75978 14 5.42064 13.8595 5.17059 13.6095C4.92055 13.3594 4.78007 13.0203 4.78007 12.6667V3.33333C4.78007 2.97971 4.63959 2.64057 4.38955 2.39052C4.1395 2.14048 3.80036 2 3.44674 2C3.09311 2 2.75398 2.14048 2.50393 2.39052C2.25388 2.64057 2.1134 2.97971 2.1134 3.33333V4.66667C2.1134 4.84348 2.18364 5.01305 2.30867 5.13807C2.43369 5.2631 2.60326 5.33333 2.78007 5.33333H4.78007"
//             stroke="#344256"
//             strokeWidth="1.33333"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <span>Print</span>
//       </button>
//     </div>
//   );
// }

// export default JourneyActions;
