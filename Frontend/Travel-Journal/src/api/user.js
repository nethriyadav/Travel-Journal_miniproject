
import axios from "axios";


const USER_API = axios.create({
  baseURL: "https://travel-journal-w8vd.onrender.com/api/v1/users",
  withCredentials: true,
});

// ✅ Get logged-in user info
export const getCurrentUser = async () => {
  const res = await USER_API.get("/me");
  return res.data.data;
};

// ✅ Update user profile (name, email, photo)
export const updateUserProfile = async ({ name, email, photo }) => {
  try {
    const formData = new FormData();
    if (name) formData.append("name", name);
    if (email) formData.append("email", email);
    if (photo) formData.append("photo", photo);

    const res = await USER_API.patch("/updateMe", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

    console.log("👤 Profile updated:", res.data.data.user);
    return res.data.data.user;
  } catch (err) {
    console.error("❌ Error updating profile:", err.response?.data || err.message);
    throw err;
  }
};

// ✅ Deactivate user account (soft delete)
export const deleteMyAccount = async () => {
  const res = await USER_API.delete("/deleteMe");
  return res.data;
};

// ✅ Get any user by ID (with journals populated)
export const getUserById = async (id) => {
  const res = await USER_API.get(`/${id}`);
  return res.data.data.data;
};
