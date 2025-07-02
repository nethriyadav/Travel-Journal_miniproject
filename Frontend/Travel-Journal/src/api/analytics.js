import axios from "axios";

const USER_API = axios.create({
  baseURL: "https://travel-journal-w8vd.onrender.com/api/v1/user/analytics",
  withCredentials: true,
});

// ✅ Get current user's profile stats/insights
export const getUserInsights = async () => {
  const res = await USER_API.get("/user-insights");
  return res.data.data; // you can adjust based on how you structure your response
};

export const getMostVisitedLocations=async()=>
{
  const res=await USER_API.get("/most-visited-locations");
  return res.data.data;
}

// (Optional) Fetch logged-in user details
export const getCurrentUser = async () => {
  const res = await axios.get("https://travel-journal-w8vd.onrender.com/api/v1/users/me", {
    withCredentials: true,
  });
  return res.data.data;
};
