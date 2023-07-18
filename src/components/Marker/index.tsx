import { MarkerF } from "@react-google-maps/api";
import { useGlobalContext } from "../../context/GlobalContext";
import { LocomotiveRoutePositionDTO } from "../../types/locomotives";

type MarkerProps = {
  locomotive: LocomotiveRoutePositionDTO;
  handleOnClick: () => void;
};

const Marker = ({ locomotive, handleOnClick }: MarkerProps) => {
  const { globalState } = useGlobalContext();

  const markerIcon = {
    "": "./marker-running.svg",
    "Em movimento": "./marker-running.svg",
    "Locomotiva parada": "./marker-stopped.svg",
    "Em manutenção": "./marker-maintenance.svg",
    "Problema de equipagem": "./marker-problem.svg",
  };

  return (
    <MarkerF
      key={locomotive.id}
      clickable
      onClick={handleOnClick}
      icon={markerIcon[locomotive.status]}
      position={{
        lat: Number(
          globalState.routesData?.[locomotive.routeName][locomotive.index]
            .latitude
        ),
        lng: Number(
          globalState.routesData?.[locomotive.routeName][locomotive.index]
            .longitude
        ),
      }}
    />
  );
};

export default Marker;
