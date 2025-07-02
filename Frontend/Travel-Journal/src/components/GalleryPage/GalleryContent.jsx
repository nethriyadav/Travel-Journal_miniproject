// GalleryContent.jsx
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";// Make sure your UserContext is imported
import { getCurrentUserMedia } from "../../api/media"; // Assuming this is the correct import path
import GalleryControls from "./GalleryControls";
import PhotoGrid from "./PhotoGrid";

function GalleryContent() {
  const [photos, setPhotos] = useState([]);
  const { user } = useContext(UserContext);  // Get user data from context
  useEffect(() => {
    if (user && user.data && user.data.id) {
      console.log("User data:", user);  // Check user data for debugging
      const fetchPhotos = async () => {
        try {
          const media = await getCurrentUserMedia();  // Get media directly without passing userId
          console.log("Fetched media:", media);  // Check fetched media
          setPhotos(media);
        } catch (err) {
          console.error("Error fetching media:", err);
        }
      };
  
      fetchPhotos();  // Trigger fetch on mount
    } else {
      console.log("No user data available.");
    }
  }, [user]);  // Re-run when `user` state changes

  return (
    <main className="flex-1 px-4 py-8 mx-auto max-w-[1400px]">
      <GalleryControls />
      <PhotoGrid photos={photos} setPhotos={setPhotos} />  {/* Pass photos as prop to PhotoGrid */}
    </main>
  );
}

export default GalleryContent;












// import React from "react";
// import GalleryTabs from "./GalleryTabs";
// import PhotoGrid from "./PhotoGrid";
// import GalleryControls from "./GalleryControls";

// function GalleryContent() {
//   return (
//     <main className="flex-1 px-4 py-8 mx-auto max-w-[1400px]">
//       <GalleryControls/>
//       <PhotoGrid />
//     </main>
//   );
// }

// export default GalleryContent;
