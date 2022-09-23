import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon, map } from "leaflet";
import { MapDivContainer } from "./map-style";
import { ResultCardI } from "../../interface";
import { useEffect } from "react";

export default function LiveMap({ resultCardProps }: ResultCardI) {
  const position = resultCardProps.coord;
  const customMarker = icon({
    iconUrl: "icon-location.svg",
    iconSize: [46, 56],
    iconAnchor: [32, 64],
  });

  function FlyMapTo() {
    const map = useMap();

    useEffect(() => {
      map.flyTo(position, 13, {
        animate: false,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position]);

    return null;
  }

  return (
    <MapDivContainer>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <FlyMapTo />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={customMarker}></Marker>
      </MapContainer>
    </MapDivContainer>
  );
}
