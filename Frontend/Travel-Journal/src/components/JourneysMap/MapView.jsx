import React,{useRef,useEffect} from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function MapView({journals}) {
  const mapContainerRef=useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [78.9629, 20.5937], // Center of India
      zoom: 3.5,
    });

    journals.forEach((journal) => {
      const { coordinates } = journal.location;
      if (coordinates && coordinates.length === 2) {
        new mapboxgl.Marker()
          .setLngLat(coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<h3>${journal.title}</h3><p>${journal.location.name}</p>`
            )
          )
          .addTo(map);
      }
    });

    return () => map.remove();
  }, [journals]);

  
  return (
    <div
      ref={mapContainerRef}
      className="w-full h-80 rounded-2xl border shadow-md"
    />
  );
}

export default MapView;

//   return (
//     <div className="overflow-hidden w-full h-80 rounded-2xl border shadow-md backdrop-blur-[[6px]] bg-white bg-opacity-80 border-white border-opacity-30">
//       <div className="relative bg-zinc-300 size-full">
//         <div className="absolute top-3 left-3 z-10">
//           <div className="flex flex-col rounded border-2 border-black border-opacity-20 h-[60px] w-[30px]">
//             <button
//               className="text-2xl font-bold bg-white rounded-sm border border-stone-300 h-[30px]"
//               aria-label="Zoom in"
//             >
//               +
//             </button>
//             <button
//               className="text-2xl font-bold bg-white rounded-sm h-[30px]"
//               aria-label="Zoom out"
//             >
//               −
//             </button>
//           </div>
//         </div>
//         <div className="absolute right-0 bottom-0 px-1.5 py-px text-xs bg-white bg-opacity-80">
//           <a href="#" className="text-sky-700">
//             Leaflet
//           </a>
//           <span>| ©</span>
//           <a href="#" className="text-sky-700">
//             OpenStreetMap
//           </a>
//           <span>contributors</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MapView;
