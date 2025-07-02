import React, { useEffect, useState, useContext } from "react";
import {
  getReviewsByJournal,
  postReview,
  updateReview,
  deleteReview,
} from "../../api/reviews";
import { UserContext } from "../../context/UserContext";

const baseURL = import.meta.env.VITE_API_BASE_URL;

function ReviewTab({ journalId }) {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [editReviewId, setEditReviewId] = useState(null);
  const [error, setError] = useState("");
  const { user } = useContext(UserContext);

  const fetchReviews = async () => {
    try {
      const data = await getReviewsByJournal(journalId);
      setReviews(data);
    } catch (err) {
      console.error("Failed to load reviews:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [journalId]);

  // useEffect(() => {
  //   // If current user already reviewed, load their review into the form
  //   const existing = reviews.find((r) => r.user._id === user?.data?._id);
  //   if (existing) {
  //     setEditReviewId(existing._id);
  //     setRating(existing.rating);
  //     setReviewText(existing.review);
  //   } else {
  //     setEditReviewId(null);
  //     setRating(0);
  //     setReviewText("");
  //   }
  // }, [reviews, user]);

  const handleSubmit = async () => {
    try {
      const existing = reviews.find((r) => r.user._id === user?.data?._id);
      setError("");

      if (!editReviewId && existing) {
      setError("You have already submitted a review for this journal. Please edit or delete it.");
      return;
    }

    if (rating === 0) {
      setError("Rating is required to submit a review.");
      return;
    } 

      if (editReviewId) {
        await updateReview(editReviewId, { rating, review: reviewText });
      } else {
        await postReview({ rating, review: reviewText, journalId });
      }

      await fetchReviews();
      setRating(0);
      setReviewText("");
      setEditReviewId(null);
    } catch (err) {
      console.error("Failed to submit review:", err);
      setError("You cannnot submit a review without giving rating...");
    } finally {
      setRating(0);
      setReviewText("");
      setEditReviewId(null);
    }
  };

  const handleDelete = async (rid) => {
    try {
      if (rid) {
        await deleteReview(rid);
        await fetchReviews();
        setRating(0);
        setReviewText("");
        setEditReviewId(null);
      }
    } catch (err) {
      console.error("Failed to delete review:", err);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">
        {editReviewId ? "Edit Your Review" : "Leave a Review"}
      </h3>

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex space-x-2">
        {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-2xl ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Write your review here..."
      />

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {editReviewId ? "Update Review" : "Submit Review"}
      </button>

      <hr className="my-6" />
      <h3 className="text-xl font-semibold">Reviews</h3>

      <div className="space-y-4">
        {reviews.map((r) => {
          const isOwner = user.data?._id === r.user._id;

          return (
            <div key={r._id} className="p-4 border rounded shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src={
                    r.user.photo
                      ? `${baseURL}/img/users/${r.user.photo}`
                      : "/user-fallback.jpg"
                  }
                  alt={r.user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{r.user.name}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="text-yellow-400 text-lg">
                {"★".repeat(r.rating)}
              </div>
              <p>{r.review}</p>
              {isOwner && !editReviewId && (
                <button
                  onClick={() => {
                    setEditReviewId(r._id);
                    setRating(r.rating);
                    setReviewText(r.review);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Update Review
                  {/* {editReviewId ? "Update Review" : "Submit Review"} */}
                </button>
              )}
              {isOwner && (
                <button
                  onClick={() => handleDelete(r._id)}
                  className="px-4 py-2 ml-2 bg-red-600 text-white rounded"
                >
                  Delete Review
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReviewTab;

// // src/components/ReviewTab.jsx
// import React, { useEffect, useState } from "react";
// import { getReviewsByJournal,postReview,updateReview,deleteReview } from "../../api/reviews";
// import { UserContext } from "../../context/UserContext"; // adjust to your setup
// import { useContext } from "react";
// const baseURL = import.meta.env.VITE_API_BASE_URL;

// function ReviewTab({ journalId }) {
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(0);
//   const [reviewText, setReviewText] = useState("");
//   const [editReviewId, setEditReviewId] = useState(null); // to track update mode

//     const { user } = useContext(UserContext);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const data = await getReviewsByJournal(journalId);
//         setReviews(data);
//       } catch (err) {
//         console.error("Failed to load reviews:", err);
//       }
//     };

//     fetchReviews();
//   }, [journalId]);

//   const handleSubmit = async () => {
//     try {
//       if (editReviewId) {
//       await updateReview(editReviewId, { rating, review: reviewText });
//     }
//     else{
//       await postReview({ rating, review: reviewText,journalId });
//     }
//       setReviewText("");
//       setRating(0);
//       setEditReviewId(null);
//       const updated = await getReviewsByJournal(journalId);
//       setReviews(updated);
//     } catch (err) {
//       console.error("Failed to submit review:", err);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h3 className="text-xl font-semibold">Leave a Review</h3>
//       <div className="flex space-x-2">
//         {[1, 1.5,2,2.5, 3,3.5, 4,4.5, 5].map((star) => (
//           <span
//             key={star}
//             className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
//             onClick={() => setRating(star)}
//           >
//             ★
//           </span>
//         ))}
//       </div>
//       <textarea
//         value={reviewText}
//         onChange={(e) => setReviewText(e.target.value)}
//         className="w-full p-2 border rounded"
//         placeholder="Write your review here..."
//       />
//       {/* <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">
//         Submit Review
//       </button> */}

//       <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">
//   {editReviewId ? "Update Review" : "Submit Review"}
// </button>

//       <hr className="my-6" />

//       <h3 className="text-xl font-semibold">Reviews</h3>
//       <div className="space-y-4">
//         {/* {reviews.map((r) => (
//           <div key={r._id} className="p-4 border rounded shadow-sm">
//             <div className="flex items-center space-x-3 mb-2">

//                <img
//               src={r.user.photo ? `${baseURL}/img/users/${r.user.photo}` : "/user-fallback.jpg"}
//               alt={r.user.name}
//               className="w-8 h-8 rounded-full object-cover"
//             />
//               <div>
//                 <p className="font-semibold">{r.user.name}</p>
//                 <p className="text-sm text-gray-400">{new Date(r.createdAt).toLocaleDateString()}</p>
//               </div>
//             </div>
//             <div className="text-yellow-400 text-lg">{"★".repeat(r.rating)}</div>
//             <p>{r.review}</p>
//           </div>
//         ))} */}

// {reviews.map((r) => {
//   const isOwner = user.data?._id === r.user._id;
//   console.log("This is r: ",r.user);

//   return (
//     <div key={r._id} className="p-4 border rounded shadow-sm">
//       <div className="flex items-center space-x-3 mb-2">
//         <img
//           src={r.user.photo ? `${baseURL}/img/users/${r.user.photo}` : "/user-fallback.jpg"}
//           alt={r.user.name}
//           className="w-8 h-8 rounded-full object-cover"
//         />
//         <div>
//           <p className="font-semibold">{r.user.name}</p>
//           <p className="text-sm text-gray-400">{new Date(r.createdAt).toLocaleDateString()}</p>
//         </div>

//         {isOwner && (
//           <div className="ml-auto flex gap-2">
//             <button
//               onClick={() => {
//                 setEditReviewId(r._id);
//                 setReviewText(r.review);
//                 setRating(r.rating);
//               }}
//               className="text-sm text-blue-600"
//             >
//               Edit
//             </button>
//             <button
//               onClick={async () => {
//                 await deleteReview(r._id);
//                 const updated = await getReviewsByJournal(journalId);
//                 setReviews(updated);
//               }}
//               className="text-sm text-red-500"
//             >
//               Delete
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="text-yellow-400 text-lg">{"★".repeat(r.rating)}</div>
//       <p>{r.review}</p>
//     </div>
//   );
// })}

//       </div>
//     </div>
//   );
// }

// export default ReviewTab;
