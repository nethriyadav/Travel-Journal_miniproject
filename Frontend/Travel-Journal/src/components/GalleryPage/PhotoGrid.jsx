// PhotoGrid.jsx
import React from "react";
import PhotoCard from "./PhotoCard";
import { deleteMedia } from "../../api/media";

function PhotoGrid({ photos ,setPhotos}) {  
  const handleDelete = async (mediaId) => {
    try {
      await deleteMedia(mediaId);
      setPhotos((prev) => prev.filter((p) => p._id !== mediaId));
    } catch (err) {
      console.error("Failed to delete media:", err);
    }
  };
  return (
    <section className="box-border grid gap-4 p-0 m-0 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
      {photos && photos.length > 0 ? (
        photos.map((photo) => (
          <PhotoCard key={photo._id} title={photo.title} imageUrl={`https://travel-journal-w8vd.onrender.com${photo.url}`} journalId={photo.journalId}
          mediaId={photo._id}
          onDelete={handleDelete} />
        ))
      ) : (
        <p>No media found</p>  
      )}
    </section>
  );
}

export default PhotoGrid;

























// import React from "react";
// import PhotoCard from "./PhotoCard";

// function PhotoGrid() {
//   const photos = [
//     {
//       id: 1,
//       title: "Sunrise at Mont Saint-Michel",
//       imageUrl: "https://placehold.co/393x393/e6e9f0/e6e9f0",
//     },
//     {
//       id: 2,
//       title: "Getting Lost in Kyoto",
//       imageUrl: "https://placehold.co/393x393/e6e9f0/e6e9f0",
//     },
//     {
//       id: 3,
//       title: "Hiking the Inca Trail",
//       imageUrl: "https://placehold.co/393x393/e6e9f0/e6e9f0",
//     },
//     {
//       id: 4,
//       title: "Floating Markets of Bangkok",
//       imageUrl: "https://placehold.co/393x393/e6e9f0/e6e9f0",
//     },
//     {
//       id: 5,
//       title: "Northern Lights in Iceland",
//       imageUrl: "https://placehold.co/393x393/e6e9f0/e6e9f0",
//     },
//   ];

//   return (
//     <section className="box-border grid gap-4 p-0 m-0 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
//       {photos.map((photo) => (
//         <PhotoCard
//           key={photo.id}
//           title={photo.title}
//           imageUrl={photo.imageUrl}
//         />
//       ))}
//     </section>
//   );
// }

// export default PhotoGrid;
