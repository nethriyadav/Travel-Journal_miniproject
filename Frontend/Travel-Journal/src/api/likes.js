import axios from "axios";

const LIKE_API = axios.create({
  baseURL: "https://travel-journal-w8vd.onrender.com/api/v1/likes",
  withCredentials: true,
});

// ✅ Like a journal
export const likeJournal = async (journalId) => {
  const res = await LIKE_API.post(`/journals/${journalId}/like`);
  return res.data;
};

// ✅ Unlike a journal
export const unlikeJournal = async (journalId) => {
  const res = await LIKE_API.delete(`/journals/${journalId}/unlike`);
  return res.data;
};

// ✅ Get total likes for a journal
export const getJournalLikes = async (journalId) => {
  const res = await LIKE_API.get(`/journals/${journalId}`);
  return res.data.data.likes;
};




export const getLikedJournals = async () => {
  const res = await axios.get("https://travel-journal-w8vd.onrender.com/api/v1/users/mylikes", {
    withCredentials: true,
  });
  return res.data.data.journals;
};
