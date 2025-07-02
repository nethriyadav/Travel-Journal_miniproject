// src/api/reviews.js
import axios from "axios";

const REVIEW_API = axios.create({
  baseURL: "https://travel-journal-w8vd.onrender.com/api/v1",
  withCredentials: true,
});

// ✅ rename to match what ReviewTab expects
export const getReviewsByJournal = async (journalId) => {
  const res = await REVIEW_API.get(`/journals/${journalId}/reviews`);
  return res.data.data.data; // ⬅️ because your backend returns: { data: { data: [...] } }
};

export const postReview = async ({ journalId, review, rating }) => {
  const res = await REVIEW_API.post(`/journals/${journalId}/reviews`, {
    review,
    rating,
  });
  return res.data.data;
};

export const deleteReview = async (reviewId) => {
  const res = await REVIEW_API.delete(`/reviews/${reviewId}`);
  return res.data;
};

export const updateReview = async (reviewId, { review, rating }) => {
  const res = await REVIEW_API.patch(`/reviews/${reviewId}`, { review, rating });
  return res.data.data;
};

