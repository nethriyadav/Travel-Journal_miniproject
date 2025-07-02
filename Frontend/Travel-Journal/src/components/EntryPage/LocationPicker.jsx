import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapboxgl.accessToken });

const LocationPicker = ({ onLocationSelect }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [78.9629, 20.5937], // India center
      zoom: 4,
    });

    // Handle manual pin drop
    map.current.on("click", async (e) => {
      const lng = e.lngLat.lng;
      const lat = e.lngLat.lat;

      // Add or move marker
      if (marker.current) marker.current.setLngLat([lng, lat]);
      else
        marker.current = new mapboxgl.Marker()
          .setLngLat([lng, lat])
          .addTo(map.current);

      // Reverse geocode to get place name
      const reverse = await geocodingClient
        .reverseGeocode({
          query: [lng, lat],
          limit: 1,
        })
        .send();

      const placeName = reverse.body.features[0]?.place_name || "Dropped Pin";

      //setSearchText(placeName);
      setSuggestions([]);

      onLocationSelect({
        name: "Custom Pin",
        address: placeName,
        coordinates: [lng, lat],
      });
    });
  }, []);

  // const handleSearch = async (e) => {
  //   const query = e.target.value;
  //   setSearchText(query);

  //   if (query.length < 3) {
  //     setSuggestions([]);
  //     return;
  //   }

  //   const response = await geocodingClient
  //     .forwardGeocode({
  //       query,
  //       limit: 5,
  //     })
  //     .send();

  //   setSuggestions(response.body.features);
  // };

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchText(query); // keeps what user types

    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const response = await geocodingClient
      .forwardGeocode({
        query,
        limit: 5,
      })
      .send();

    setSuggestions(response.body.features);
  };

  const handleSelect = (feature) => {
    const [lng, lat] = feature.center;
    const placeName = feature.place_name;

    map.current.flyTo({ center: [lng, lat], zoom: 12 });

    if (marker.current) marker.current.setLngLat([lng, lat]);
    else
      marker.current = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map.current);

    setSuggestions([]);
    setSelectedLocation({
      name: "Custom pin",
      address: placeName,
      coordinates: [lng, lat],
    });

    onLocationSelect({
      name: "Custom pin",
      address: placeName,
      coordinates: [lng, lat],
    });
  };

  // const handleSelect = (feature) => {
  //   const [lng, lat] = feature.center;
  //   const placeName = feature.place_name;

  //   // Move map
  //   map.current.flyTo({ center: [lng, lat], zoom: 12 });

  //   // Drop or move marker
  //   if (marker.current) marker.current.setLngLat([lng, lat]);
  //   else marker.current = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);

  //   // Update parent
  //   onLocationSelect({
  //     name: feature.text,
  //     address: placeName,
  //     coordinates: [lng, lat],
  //   });

  //   // Update input
  //   //setSearchText(placeName);
  //   setSuggestions([]);
  // };

  return (
    <div className="space-y-2 pb-10">
      <input
        className="w-full p-2 border rounded"
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search for a location or click on the map..."
      />
      {suggestions.length > 0 && (
        <ul className="bg-white border rounded shadow p-2">
          {suggestions.map((sug) => (
            <li
              key={sug.id}
              className="cursor-pointer hover:bg-gray-100 p-1"
              onClick={() => handleSelect(sug)}
            >
              {sug.place_name}
            </li>
          ))}
        </ul>
      )}
      <div ref={mapContainer} className="h-64 rounded shadow" />
    </div>
  );
};

export default LocationPicker;
