import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

function MapView({ journal }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!journal) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: journal.location.coordinates, // [lng, lat]
      zoom: 6,
    });

    new mapboxgl.Marker()
      .setLngLat(journal.location.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<h3>${journal.title}</h3><p>${journal.location.name}</p>`
        )
      )
      .addTo(map);

    return () => map.remove();
  }, [journal]);

  return <div ref={mapContainer} className="w-full h-[500px] rounded-2xl" />;
}

export default MapView;
