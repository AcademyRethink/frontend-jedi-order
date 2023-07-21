import "./styles.css";
import Map from "../Map";
import { useGlobalContext } from "../../context/GlobalContext";

const MapCenterPanel = () => {
  const center = {
    lat: -19.476989,
    lng: -42.58734,
  };
  const { globalState } = useGlobalContext();

  return (
    <div className="center-panel-map-container">
      <Map
        center={center}
        locomotivesRouteDetails={globalState.locomotivesRouteDetails}
      />
    </div>
  );
};

export default MapCenterPanel;
