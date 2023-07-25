import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./styles.css";
import { LocomotiveRoutePositionDTO } from "../../types/locomotives";
import Marker from "../Marker";
import LoadingComponent from "../LoadingComponent";

type MapProps = {
  center: {
    lat: number;
    lng: number;
  };
  locomotivesRouteDetails: LocomotiveRoutePositionDTO[] | undefined;
  onMarkerClick?: (locomotive: LocomotiveRoutePositionDTO) => void;
};

const Map = ({ center, locomotivesRouteDetails, onMarkerClick }: MapProps) => {
  const mapCenterPoint = useMemo(() => center, [center]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
  });

  if (!isLoaded || !locomotivesRouteDetails) return <LoadingComponent />;

  return (
    <GoogleMap
      zoom={6}
      center={mapCenterPoint}
      mapContainerClassName="map-container"
    >
      {locomotivesRouteDetails &&
        locomotivesRouteDetails.map((locomotive) => {
          return (
            <Marker
              key={locomotive.id}
              locomotive={locomotive}
              onClick={
                onMarkerClick ? () => onMarkerClick(locomotive) : () => {}
              }
            />
          );
        })}
    </GoogleMap>
  );
};

export default Map;
