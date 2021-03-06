import mapboxgl from "mapbox-gl";

const initMapbox = () => {
  const mapElement = document.getElementById("map");

  const fitMapToMarkers = (map, markers) => {
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach((marker) => bounds.extend([marker.lng, marker.lat]));
    map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
  };

  if (mapElement) {
    // [ ... ]
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/hallomoto/ckemly6fn235d19qqhmhuszpe",
    });
    const markers = JSON.parse(mapElement.dataset.markers);
    markers.forEach((marker) => {
      const element = document.createElement("div");
      element.className = "marker";
      element.style.backgroundImage = `url('${marker.image_url}')`;
      element.style.backgroundSize = "contain";
      element.style.width = "27px";
      element.style.height = "40px";
      element.style.shadow = "4px 4px #888888";

      // Pass the element as an argument to the new marker
      new mapboxgl.Marker(element)
        .setLngLat([marker.lng, marker.lat])
        .addTo(map);
    });
    fitMapToMarkers(map, markers);
  }
};

export { initMapbox };
