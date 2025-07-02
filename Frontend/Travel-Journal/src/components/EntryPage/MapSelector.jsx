"use client";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Adds the search bar
function SearchControl({ onSelect }) {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      showMarker: false, // we'll place the marker ourselves
    });

    map.addControl(searchControl);

    map.on("geosearch/showlocation", (result) => {
      const { x: lng, y: lat, label: name } = result.location;
      onSelect({ lat, lng, name });
    });

    return () => map.removeControl(searchControl);
  }, [map, onSelect]);

  return null;
}

// Handles manual map clicks
function ClickableLocation({ onSelect, setMarker }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          const name = data.display_name || "Unknown location";
          const loc = { lat, lng, name };
          onSelect(loc);
          setMarker(loc);
        });
    },
  });

  return null;
}

export default function MapSelector({ onLocationSelect }) {
  const [marker, setMarker] = useState(null);

  const handleSelect = (loc) => {
    setMarker(loc);
    onLocationSelect(loc); // pass selected location to parent
  };

  return (
    <div className="h-96 w-full rounded-xl overflow-hidden mt-6">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={4}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SearchControl onSelect={handleSelect} />
        <ClickableLocation onSelect={handleSelect} setMarker={setMarker} />
        {marker && <Marker position={[marker.lat, marker.lng]} />}
      </MapContainer>
    </div>
  );
}


























// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   useMapEvents,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Fix default icon issue in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

// function LocationMarker({ onSelect }) {
//   const [position, setPosition] = useState(null);

//   useMapEvents({
//     click(e) {
//       setPosition(e.latlng);
//       fetch(
//         `https://nominatim.openstreetmap.org/reverse?lat=${e.latlng.lat}&lon=${e.latlng.lng}&format=json`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           const name = data.display_name || "Unknown location";
//           onSelect({
//             lat: e.latlng.lat,
//             lng: e.latlng.lng,
//             name,
//           });
//         });
//     },
//   });

//   return position ? <Marker position={position} /> : null;
// }

// export default function MapSelector({ onLocationSelect }) {
//   return (
//     <div className="h-96 w-full rounded-xl overflow-hidden mt-6">
//       <MapContainer
//         center={[20.5937, 78.9629]} // Centered on India
//         zoom={4}
//         scrollWheelZoom={true}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           attribution='&copy; OpenStreetMap contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <LocationMarker onSelect={onLocationSelect} />
//       </MapContainer>
//     </div>
//   );
// }
