import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { MapDivContainer } from "./map-style";

export default function LiveMap() {
  const customMarker = icon({
    iconUrl: "icon-location.svg",
    iconSize: [46, 56],
    iconAnchor: [32, 64],
  });
  return (
    <MapDivContainer>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} icon={customMarker}></Marker>
      </MapContainer>
    </MapDivContainer>
  );
}
