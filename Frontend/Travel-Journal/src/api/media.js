// src/api/media.js

import axios from "axios";

const MEDIA_API = axios.create({
  baseURL: "https://travel-journal-w8vd.onrender.com/api/v1/media",
  withCredentials: true,
});

// Get all media for a specific journal
export const getJournalMedia = async (journalId) => {
  const res = await MEDIA_API.get(`/journal/${journalId}`);
  return res.data.data.media;
};

// Upload a media file to a journal
export const uploadMedia = async (file, journalId) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await MEDIA_API.post(`/upload/${journalId}`, formData);
  console.log(res.data.data);
  return res.data.data.media;
};

// Delete media by mediaId
export const deleteMedia = async (mediaId) => {
  const res = await MEDIA_API.delete(`/delete/${mediaId}`);
  return res.data;
};



export const getCurrentUserMedia = async () => {
  try{
  const res = await MEDIA_API.get("/user");
  return res.data.data.media;
  }
  catch(err)
  {
    console.log("Error in printing response",err.response.message);
  }
};

