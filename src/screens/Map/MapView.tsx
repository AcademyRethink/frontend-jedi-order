import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./styles.css";
import SideBar from "../../components/SideBar";

export default function Mapa() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBhqkmV1Q_X_RP1hyaivoVUjZJThyMcNX0",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="screen">
      <SideBar />
      <Map />
    </div>
  );
}

function Map() {
  const center = useMemo(
    () => ({
      lat: -19.83282,
      lng: -43.84451000000001,
    }),
    []
  );

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}
