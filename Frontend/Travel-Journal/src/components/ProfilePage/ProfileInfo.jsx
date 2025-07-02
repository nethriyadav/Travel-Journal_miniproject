const baseUrl = import.meta.env.VITE_API_BASE_URL;
import React, { useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { updateUserProfile } from "../../api/user";

function ProfileInfo() {
  const { user, defaultPic, setUser } = useContext(UserContext);
  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const updatedUser = await updateUserProfile({ photo: file });
        console.log("This is Updated user,", updatedUser);
        setUser({ ...user, photo: updatedUser.photo }); // update user context with new photo
        console.log(user);
      } catch (err) {
        console.error("Error uploading profile photo:", err);
      }
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  if (!user || !user.data||!user.data.photo) {
    return <p className="text-slate-500">Loading profile...</p>;
  }

  return (
    <section className="flex flex-col gap-4 items-center">
      <div className="relative">
        <div className="overflow-hidden w-24 h-24 rounded-full">
          <img
            src={
              user.data?.photo
                ? user.data.photo.startsWith("http")
                  ? user.data.photo
                  : `${baseUrl}/img/users/${user.data.photo}`
                : defaultPic
            }
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        <button
          className="flex absolute right-0 bottom-0 justify-center items-center p-2 w-8 h-8 rounded-full bg-slate-100"
          aria-label="Edit profile picture"
          onClick={triggerFileSelect}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[16px] h-[16px]"
          >
            <path
              d="M8 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8"
              stroke="#344256"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.25 1.75C12.5152 1.48479 12.875 1.33579 13.25 1.33579C13.625 1.33579 13.9848 1.48479 14.25 1.75C14.5152 2.01522 14.6642 2.37492 14.6642 2.75C14.6642 3.12508 14.5152 3.48479 14.25 3.75L8.24133 9.75933C8.08302 9.91749 7.88747 10.0333 7.67267 10.096L5.75733 10.656C5.69996 10.6727 5.63916 10.6737 5.58127 10.6589C5.52338 10.6441 5.47055 10.614 5.42829 10.5718C5.38603 10.5295 5.35592 10.4767 5.34109 10.4188C5.32626 10.3609 5.32726 10.3 5.344 10.2427L5.904 8.32733C5.96701 8.1127 6.08301 7.91737 6.24133 7.75933L12.25 1.75Z"
              stroke="#344256"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl text-slate-700">{user.data.name}</h2>
      </div>
    </section>
  );
}

export default ProfileInfo;

// import React, { useContext, useRef } from "react";
// import { UserContext } from "../../context/UserContext";

// function ProfileInfo() {
//   const { user, defaultPic } = useContext(UserContext);
//   const fileInputRef = useRef(null);

//   // Handle file change (this is where you’ll add upload logic later)
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       console.log("Selected file:", file);
//       // TODO: You can now upload this file to the server or preview it
//     }
//   };

//   const triggerFileSelect = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   if (!user || !user.data) {
//     return <p className="text-slate-500">Loading profile...</p>;
//   }

//   return (
//     <section className="flex flex-col gap-4 items-center">
//       <div className="relative">
//         <div className="overflow-hidden w-24 h-24 rounded-full">
//           <img
//             src={user?.photo || defaultPic}
//             alt="Profile picture"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Invisible File Input */}
//         <input
//           type="file"
//           accept="image/*"
//           ref={fileInputRef}
//           className="hidden"
//           onChange={handleFileChange}
//         />

//         <button
//           className="flex absolute right-0 bottom-0 justify-center items-center p-2 w-8 h-8 rounded-full bg-slate-100"
//           aria-label="Edit profile picture"
//           onClick={triggerFileSelect}
//         >
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-[16px] h-[16px]"
//           >
//             <path
//               d="M8 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8"
//               stroke="#344256"
//               strokeWidth="1.33333"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M12.2499 1.74991C12.5151 1.48469 12.8748 1.33569 13.2499 1.33569C13.625 1.33569 13.9847 1.48469 14.2499 1.74991C14.5151 2.01512 14.6641 2.37483 14.6641 2.74991C14.6641 3.12498 14.5151 3.48469 14.2499 3.74991L8.24123 9.75924C8.08293 9.9174 7.88737 10.0332 7.67257 10.0959L5.75723 10.6559C5.69987 10.6726 5.63906 10.6736 5.58117 10.6588C5.52329 10.644 5.47045 10.6139 5.4282 10.5716C5.38594 10.5294 5.35583 10.4765 5.341 10.4186C5.32617 10.3607 5.32717 10.2999 5.3439 10.2426L5.9039 8.32724C5.96692 8.11261 6.08292 7.91728 6.24123 7.75924L12.2499 1.74991Z"
//               stroke="#344256"
//               strokeWidth="1.33333"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//       </div>

//       <div className="flex flex-col gap-2 items-center">
//         <h2 className="text-2xl text-slate-700">{user.data.name}</h2>
//       </div>
//     </section>
//   );
// }

// export default ProfileInfo;

// import React from "react";
// import { useContext } from "react";
// import { UserContext } from "../../context/UserContext";

// function ProfileInfo() {
//   const {user,defaultPic}=useContext(UserContext);

//   if (!user || !user.data) {
//     return <p className="text-slate-500">Loading profile...</p>;
//   }

//   return (
//     <section className="flex flex-col gap-4 items-center">
//       <div className="relative">
//         <div className="overflow-hidden w-24 h-24 rounded-full">
//           <img
//             src={user?.photo||defaultPic}
//             alt="Profile picture"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <button
//           className="flex absolute right-0 bottom-0 justify-center items-center p-2 w-8 h-8 rounded-full bg-slate-100"
//           aria-label="Edit profile picture"
//         >
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-[16px] h-[16px]"
//           >
//             <path
//               d="M8 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8"
//               stroke="#344256"
//               strokeWidth="1.33333"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M12.2499 1.74991C12.5151 1.48469 12.8748 1.33569 13.2499 1.33569C13.625 1.33569 13.9847 1.48469 14.2499 1.74991C14.5151 2.01512 14.6641 2.37483 14.6641 2.74991C14.6641 3.12498 14.5151 3.48469 14.2499 3.74991L8.24123 9.75924C8.08293 9.9174 7.88737 10.0332 7.67257 10.0959L5.75723 10.6559C5.69987 10.6726 5.63906 10.6736 5.58117 10.6588C5.52329 10.644 5.47045 10.6139 5.4282 10.5716C5.38594 10.5294 5.35583 10.4765 5.341 10.4186C5.32617 10.3607 5.32717 10.2999 5.3439 10.2426L5.9039 8.32724C5.96692 8.11261 6.08292 7.91728 6.24123 7.75924L12.2499 1.74991Z"
//               stroke="#344256"
//               strokeWidth="1.33333"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//       </div>
//       <div className="flex flex-col gap-2 items-center">
//         <h2 className="text-2xl text-slate-700">{user.data.name}</h2>
//         {/* <p className="text-base text-slate-600">
//           Adventure seeker and storyteller
//         </p> */}
//         {/* <div className="flex gap-2 max-sm:flex-col max-sm:items-center">
//           <div className="flex gap-1 items-center px-3 py-1 rounded-full border border-slate-200">
//             <svg
//               width="13"
//               height="12"
//               viewBox="0 0 13 12"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-[12px] h-[12px]"
//             >
//               <path
//                 d="M7.88308 2.77639C8.02188 2.84574 8.17492 2.88185 8.33008 2.88185C8.48524 2.88185 8.63828 2.84574 8.77708 2.77639L10.6066 1.86139C10.6829 1.82327 10.7676 1.80529 10.8528 1.80917C10.938 1.81305 11.0208 1.83866 11.0933 1.88355C11.1658 1.92845 11.2256 1.99114 11.2671 2.06568C11.3085 2.14021 11.3302 2.22411 11.3301 2.30939V8.69139C11.33 8.78422 11.3041 8.8752 11.2553 8.95415C11.2065 9.0331 11.1366 9.09689 11.0536 9.13839L8.77708 10.2769C8.63828 10.3462 8.48524 10.3824 8.33008 10.3824C8.17492 10.3824 8.02188 10.3462 7.88308 10.2769L5.77708 9.22389C5.63828 9.15453 5.48524 9.11842 5.33008 9.11842C5.17492 9.11842 5.02188 9.15453 4.88308 9.22389L3.05358 10.1389C2.97726 10.177 2.89244 10.195 2.80721 10.1911C2.72197 10.1872 2.63916 10.1615 2.56664 10.1166C2.49412 10.0716 2.43431 10.0089 2.3929 9.93427C2.3515 9.85967 2.32987 9.77571 2.33008 9.69039V3.30889C2.33013 3.21606 2.35602 3.12507 2.40486 3.04612C2.45369 2.96718 2.52354 2.90338 2.60658 2.86189L4.88308 1.72339C5.02188 1.65403 5.17492 1.61792 5.33008 1.61792C5.48524 1.61792 5.63828 1.65403 5.77708 1.72339L7.88308 2.77639Z"
//                 stroke="#344256"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M8.33008 2.88208V10.3821"
//                 stroke="#344256"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M5.33008 1.61792V9.11792"
//                 stroke="#344256"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//             <span className="text-xs font-semibold text-slate-700">
//               5 Countries
//             </span>
//           </div>
//           <div className="flex gap-1 items-center px-3 py-1 rounded-full border border-slate-200">
//             <svg
//               width="13"
//               height="12"
//               viewBox="0 0 13 12"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-[12px] h-[12px]"
//             >
//               <path
//                 d="M4.9502 1V3"
//                 stroke="#344256"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M8.9502 1V3"
//                 stroke="#344256"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M10.4502 2H3.4502C2.89791 2 2.4502 2.44772 2.4502 3V10C2.4502 10.5523 2.89791 11 3.4502 11H10.4502C11.0025 11 11.4502 10.5523 11.4502 10V3C11.4502 2.44772 11.0025 2 10.4502 2Z"
//                 stroke="#344256"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M2.4502 5H11.4502"
//                 stroke="#344256"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//             <span className="text-xs font-semibold text-slate-700">
//               855 Days Journeying
//             </span>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }

// export default ProfileInfo;
