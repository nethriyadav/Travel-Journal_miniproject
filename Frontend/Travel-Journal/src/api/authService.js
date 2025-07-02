import axios from "axios";

const API = axios.create({
  baseURL: "https://travel-journal-w8vd.onrender.com/api/v1/users",
  withCredentials: true,
});


// Send OTP to email
export const loginWithOtpSend = async (email,password) => {
  const res = await API.post("/login", { email,password });
  return res.data;
};

// Verify OTP
export const loginWithOtpVerify = async (email, otp) => {
  const res = await API.post("/verify-otp", { email, otp });
  return res.data;
};



export const login = async (email, password) => {
  const res = await API.post("/login", {
    email,
    password,
  });
  return res.data;
};

export const logout = async () => {
  const res = await API.get("/logout");
  return res.data;
};

export const signup = async (name, email, password, passwordConfirm) => {
  const res = await API.post("/signup", {
    name,
    email,
    password,
    passwordConfirm,
  });
  return res.data;
};



export const updatePassword = async (
  currentPassword,
  newPassword,
  newPasswordConfirm
) => {
  const res = await API.patch("/updateMyPassword", {
    currentPassword,            // ✅ matches req.body.currentPassword
    password: newPassword,      // ✅ matches req.body.password
    passwordConfirm: newPasswordConfirm, // ✅ matches req.body.passwordConfirm
  });
  return res.data;
};



// Forgot Password (sends email)
export const forgotPassword = async (email) => {
  const res = await API.post("/forgotPassword", { email });
  return res.data;
};

// Reset Password (using token from email)
export const resetPassword = async (resetToken, newPassword, newPasswordConfirm) => {
  const res = await API.patch(`/resetPassword/${resetToken}`, {
    password: newPassword,
    passwordConfirm: newPasswordConfirm,
  });
  return res.data;
};

