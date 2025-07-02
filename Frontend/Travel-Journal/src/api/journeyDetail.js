import axios from "axios";

const JOURNEY_API = axios.create({
  baseURL: "https://travel-journal-w8vd.onrender.com/api/v1/journals",
  withCredentials: true,
});

// Get a single journey (journal) by ID
export const getJourneyDetail = async (id) => {
  const res = await JOURNEY_API.get(`/${id}`);
  return res.data.data.data;
};

// Get all journeys (if needed elsewhere)
export const getAllJourneys = async () => {
  const res = await JOURNEY_API.get("/");
  return res.data.data.data;
};

// Upload cover photo separately
export const uploadCoverPhoto = async (file) => {
  try {
    const formData = new FormData();
    formData.append("photos", file);
    const res = await JOURNEY_API.post("/upload-cover", formData);
    console.log(res.data);
    return res.data.photoUrl;
  } catch (err) {
    console.error("Error uploading photo:", err);
    throw err;
  }
};

// Create a journal entry
export const createJourney = async (journeyData) => {
  try {
    const res = await JOURNEY_API.post("/", journeyData);
    console.log("📘 Journal created:", res.data.data);
    return res.data.data.data;
  } catch (err) {
    console.error("❌ Error creating journal:", err.response?.data || err.message);
    throw err;
  }
};


// Optional: Update a journey
export const updateJourney = async (id, updates) => {
  const res = await JOURNEY_API.patch(`/${id}`, updates);
  console.log(res.data.data);
  return res.data.data.data;
};

// Optional: Delete a journey
export const deleteJourney = async (id) => {
  const res = await JOURNEY_API.delete(`/${id}`);
  return res.data;
};

export const searchJournals = async (query) => {
  const res = await JOURNEY_API.get(`/search?q=${query}`);
  console.log(res);
  return res.data;
};
