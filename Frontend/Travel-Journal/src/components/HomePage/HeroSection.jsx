import React, { useContext, useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import { UserContext } from "../../context/UserContext";

const images = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/765d7806e2802d238e7d36562b7e65a77e361ef1",
  "https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg",
  "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
  "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg",
  "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg",
  "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
];

function HeroSection() {
  const { isLoggedIn } = useContext(UserContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative rounded-2xl h-[521px] overflow-hidden">
      {/* Image Stack with opacity transition */}
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Hero Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black bg-opacity-20 z-20" />
      <div className="absolute bottom-8 left-8 text-white max-sm:p-4 z-30">
        <h2 className="mb-2.5 text-4xl max-sm:text-3xl">Your Travel Journal</h2>
        <p className="mb-5 text-base max-w-[248px] text-white text-opacity-80 max-sm:text-sm">
          Capture your adventures and memories from around the world
        </p>
        <ActionButton
          text="Start Writing"
          primary={false}
          to={isLoggedIn ? "/newEntry" : "/login"}
        />
      </div>
    </section>
  );
}

export default HeroSection;











// import React, { useContext, useEffect, useState } from "react";
// import ActionButton from "./ActionButton";
// import { UserContext } from "../../context/UserContext";

// const images = [
//    "https://cdn.builder.io/api/v1/image/assets/TEMP/765d7806e2802d238e7d36562b7e65a77e361ef1", // original
//    "https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg", 
//    "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg", // Ocean waves
//   "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg", // Historic architecture
//   "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg",
//   "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg", // Calm beach with sunset glow

// ];


// function HeroSection() {
//   const { isLoggedIn } = useContext(UserContext);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change every 5s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative rounded-2xl h-[521px] overflow-hidden">
//       <img
//         src={images[currentImageIndex]}
//         alt="Travel journal hero"
//         className="object-cover size-full transition-opacity duration-1000 ease-in-out"
//         key={images[currentImageIndex]} // trigger re-render for smooth transition
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-20" />
//       <div className="absolute bottom-8 left-8 text-white max-sm:p-4 z-10">
//         <h2 className="mb-2.5 text-4xl max-sm:text-3xl">Your Travel Journal</h2>
//         <p className="mb-5 text-base max-w-[248px] text-white text-opacity-80 max-sm:text-sm">
//           Capture your adventures and memories from around the world
//         </p>
//         <ActionButton
//           text="Start Writing"
//           primary={false}
//           to={isLoggedIn ? "/newEntry" : "/login"}
//         />
//       </div>
//     </section>
//   );
// }

// export default HeroSection;
















// import React from "react";
// import ActionButton from "./ActionButton";
// import { useContext } from "react";
// import { UserContext } from "../../context/UserContext";

// function HeroSection() {
//   const {isLoggedIn}=useContext(UserContext);
//   return (
//     <section className="overflow-hidden relative rounded-2xl h-[521px]">
//       <img
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/765d7806e2802d238e7d36562b7e65a77e361ef1"
//         alt="Travel journal hero"
//         className="object-cover size-full"
//       />
//       <div className="absolute inset-x-0 bottom-0 h-full" />
//       <div className="absolute bottom-8 left-8 text-white max-sm:p-4">
//         <h2 className="mb-2.5 text-4xl max-sm:text-3xl">Your Travel Journal</h2>
//         <p className="mb-5 text-base max-w-[248px] text-white text-opacity-80 max-sm:text-sm">
//           Capture your adventures and memories from around the world
//         </p>
//         <ActionButton
//           text="Start Writing"
//           primary={false}
//           to={isLoggedIn ? "/newEntry" : "/login"}
//         />
//       </div>
//     </section>
//   );
// }

// export default HeroSection;
