import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function FitBounds({ positions }) {
  const map = useMap();
  if (positions.length) {
    map.fitBounds(positions);
  }
  return null;
}

export default function MyMap({ info }) {
  const raw = info?.map;

  let parsed = [];
  try {
    parsed = raw ? JSON.parse(raw) : [];
  } catch (err) {
    parsed = [];
  }

  const locations = parsed
    .map((item, index) => {
      try {
        const pos = JSON.parse(item.point);
        if (!Array.isArray(pos) || pos.length !== 2) return null;
        return {
          name: "Location " + (index + 1),
          position: pos.map(Number), // ensure numbers
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  const linePositions = locations.map((r) => r.position);

  // fallback center if no positions
  const center = linePositions.length ? linePositions[0] : [0, 0];

  return (
    <MapContainer
      center={center}
      zoom={2} // initial zoom; fitBounds will adjust
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {locations.map((loc, index) => (
        <Marker key={index} position={loc.position}>
          <Popup>{loc.position.join(", ")}</Popup>
        </Marker>
      ))}

      <Polyline positions={linePositions} />

      {/* Fit the map to include all positions */}
      <FitBounds positions={linePositions} />
    </MapContainer>
  );
}
