import React, { useState, useEffect } from "react";
import { getCurrentUser, updateUserProfile } from "../../api/user";
import { updatePassword } from "../../api/authService";

const UpdateProfile = () => {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", photo: null });
  const [photoPreview, setPhotoPreview] = useState(null);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await getCurrentUser();
        console.log(`I am `,userData);
        setUser(userData);
        setForm({
          name: userData.name || "",
          email: userData.email || "",
          photo: null,
        });
        if (userData.photo) {
          setPhotoPreview(userData.photo);
        }
      } catch (err) {
        setMessage("❌ Failed to load user data.");
      }
    };
    loadUser();
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, photo: file });
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const updatedUser = await updateUserProfile(form);
      setUser(updatedUser);
      console.log(`This is udated`,updatedUser);
      setMessage("✅ Profile updated successfully.");
    } catch (err) {
      console.log(err);
      setMessage("❌ Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await updatePassword(
        passwords.currentPassword,
        passwords.newPassword,
        passwords.confirmNewPassword
      );
      setMessage("🔐 Password updated successfully.");
      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (err) {
      setMessage("❌ Failed to update password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name || ""}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email || ""}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Profile Photo</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
          {photoPreview && (
            <img
              src={photoPreview}
              alt="Preview"
              className="w-20 h-20 rounded-full mt-2 object-cover"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Saving..." : "Update Profile"}
        </button>
      </form>

      <div className="mt-6">
        <button
          onClick={() => setShowPasswordForm(!showPasswordForm)}
          className="text-blue-600 underline"
        >
          {showPasswordForm ? "Hide" : "Change Password"}
        </button>

        {showPasswordForm && (
          <form onSubmit={handlePasswordChange} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium">Current Password</label>
              <input
                type="password"
                value={passwords.currentPassword || ""}
                onChange={(e) =>
                  setPasswords({ ...passwords, currentPassword: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">New Password</label>
              <input
                type="password"
                value={passwords.newPassword || ""}
                onChange={(e) =>
                  setPasswords({ ...passwords, newPassword: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirm New Password</label>
              <input
                type="password"
                value={passwords.confirmNewPassword || ""}
                onChange={(e) =>
                  setPasswords({ ...passwords, confirmNewPassword: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        )}
      </div>

      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </div>
    </div>
  );
};

export default UpdateProfile;












































// import React, { useState, useEffect } from "react";
// import { getCurrentUser, updateUserProfile } from "../../api/user";
// import { updatePassword } from "../../api/authService";

// const UpdateProfile = () => {
//   const [user, setUser] = useState(null);
//   const [form, setForm] = useState({ name: "", email: "", photo: null });
//   const [photoPreview, setPhotoPreview] = useState(null);
//   const [showPasswordForm, setShowPasswordForm] = useState(false);
//   const [passwords, setPasswords] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmNewPassword: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const loadUser = async () => {
//       try {
//         const userData = await getCurrentUser();
//         setUser(userData);
//         setForm({
//           name: userData.name || "",
//           email: userData.email || "",
//           photo: null,
//         });
//         if (userData.photo) {
//           setPhotoPreview(userData.photo);
//         }
//       } catch (err) {
//         setMessage("❌ Failed to load user data.");
//       }
//     };
//     loadUser();
//   }, []);

//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setForm({ ...form, photo: file });
//       setPhotoPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleUpdateProfile = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     try {
//       const updatedUser = await updateUserProfile(form);
//       setUser(updatedUser);
//       setMessage("✅ Profile updated successfully.");
//     } catch (err) {
//       setMessage("❌ Failed to update profile.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePasswordChange = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     try {
//       await updatePassword(
//         passwords.currentPassword,
//         passwords.newPassword,
//         passwords.confirmNewPassword
//       );
//       setMessage("🔐 Password updated successfully.");
//       setPasswords({
//         currentPassword: "",
//         newPassword: "",
//         confirmNewPassword: "",
//       });
//     } catch (err) {
//       setMessage("❌ Failed to update password.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl">
//       <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

//       <form onSubmit={handleUpdateProfile} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={form.name || ""}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email || ""}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Profile Photo</label>
//           <input type="file" onChange={handlePhotoChange} />
//           {photoPreview && (
//             <img
//               src={photoPreview}
//               alt="Preview"
//               className="w-20 h-20 rounded-full mt-2 object-cover"
//             />
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           {loading ? "Saving..." : "Update Profile"}
//         </button>
//       </form>

//       <div className="mt-6">
//         <button
//           onClick={() => setShowPasswordForm(!showPasswordForm)}
//           className="text-blue-600 underline"
//         >
//           {showPasswordForm ? "Hide" : "Change Password"}
//         </button>

//         {showPasswordForm && (
//           <form onSubmit={handlePasswordChange} className="space-y-4 mt-4">
//             <div>
//               <label className="block text-sm font-medium">Current Password</label>
//               <input
//                 type="password"
//                 value={passwords.currentPassword || ""}
//                 onChange={(e) =>
//                   setPasswords({ ...passwords, currentPassword: e.target.value })
//                 }
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">New Password</label>
//               <input
//                 type="password"
//                 value={passwords.newPassword || ""}
//                 onChange={(e) =>
//                   setPasswords({ ...passwords, newPassword: e.target.value })
//                 }
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Confirm New Password</label>
//               <input
//                 type="password"
//                 value={passwords.confirmNewPassword || ""}
//                 onChange={(e) =>
//                   setPasswords({ ...passwords, confirmNewPassword: e.target.value })
//                 }
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-green-500 text-white px-4 py-2 rounded"
//             >
//               {loading ? "Updating..." : "Update Password"}
//             </button>
//           </form>
//         )}
//       </div>

//       {message && <p className="mt-4 text-center text-sm">{message}</p>}
//     </div>
//   );
// };

// export default UpdateProfile;


























// import React, { useState, useEffect } from "react";
// import { getCurrentUser,updateUserProfile } from "../../api/user";
// import { updatePassword } from "../../api/authService";

// const UpdateProfile = () => {
//   const [user, setUser] = useState(null);
//   const [form, setForm] = useState({ name: "", email: "", photo: null });
//   const [photoPreview, setPhotoPreview] = useState(null);
//   const [showPasswordForm, setShowPasswordForm] = useState(false);
//   const [passwords, setPasswords] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmNewPassword: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const loadUser = async () => {
//       const userData = await getCurrentUser();
//       setUser(userData);
//       setForm({ name: userData.name, email: userData.email, photo: null });
//     };
//     loadUser();
//   }, []);

//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setForm({ ...form, photo: file });
//       setPhotoPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleUpdateProfile = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     try {
//       const updatedUser = await updateUserProfile(form);
//       setUser(updatedUser);
//       setMessage("✅ Profile updated successfully.");
//     } catch (err) {
//       setMessage("❌ Failed to update profile.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePasswordChange = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     try {
//       console.log(passwords);
//       await updatePassword(
//         passwords.currentPassword,
//         passwords.newPassword,
//         passwords.confirmNewPassword
//       );
//       setMessage("🔐 Password updated successfully.");
//       setPasswords({
//         currentPassword: "",
//         newPassword: "",
//         confirmNewPassword: "",
//       });
//     } catch (err) {
//       setMessage("❌ Failed to update password.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl ">
//       <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

//       <form onSubmit={handleUpdateProfile} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Profile Photo</label>
//           <input type="file" onChange={handlePhotoChange} />
//           {photoPreview && (
//             <img
//               src={photoPreview}
//               alt="Preview"
//               className="w-20 h-20 rounded-full mt-2"
//             />
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           {loading ? "Saving..." : "Update Profile"}
//         </button>
//       </form>

//       <div className="mt-6">
//         <button
//           onClick={() => setShowPasswordForm(!showPasswordForm)}
//           className="text-blue-600 underline"
//         >
//           {showPasswordForm ? "Hide" : "Change Password"}
//         </button>

//         {showPasswordForm && (
//           <form onSubmit={handlePasswordChange} className="space-y-4 mt-4">
//             <div>
//               <label className="block text-sm font-medium">Current Password</label>
//               <input
//                 type="password"
//                 value={passwords.currentPassword}
//                 onChange={(e) =>
//                   setPasswords({ ...passwords, currentPassword: e.target.value })
//                 }
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">New Password</label>
//               <input
//                 type="password"
//                 value={passwords.newPassword}
//                 onChange={(e) =>
//                   setPasswords({ ...passwords, newPassword: e.target.value })
//                 }
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Confirm New Password</label>
//               <input
//                 type="password"
//                 value={passwords.confirmNewPassword}
//                 onChange={(e) =>
//                   setPasswords({ ...passwords, confirmNewPassword: e.target.value })
//                 }
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-green-500 text-white px-4 py-2 rounded"
//             >
//               {loading ? "Updating..." : "Update Password"}
//             </button>
//           </form>
//         )}
//       </div>

//       {message && <p className="mt-4 text-center text-sm">{message}</p>}
//     </div>
//   );
// };

// export default UpdateProfile;
