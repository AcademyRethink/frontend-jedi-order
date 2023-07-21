// import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { useLocomotivesPosition } from "../../hooks/useLocomotivesPosition";
import "./styles.css";
import AdministrativeLocomotive from "../../components/AdministrativeLocomotive";
import FailureHistory from "../../components/FailureHistory";
import MapCenterPanel from "../../components/MapCenterPanel";
import { useGlobalContext } from "../../context/GlobalContext";

const CenterPanel = () => {
  useLocomotivesPosition();
  // const navigate = useNavigate();
  const { globalState } = useGlobalContext();

  // setTimeout(() => {
  //   navigate("/map");
  // }, 15000);

  return (
    <div className="center-panel-screen-container">
      <SideBar />
      <div className="overview-info">
        <div className="admLocomotives">
          <AdministrativeLocomotive
            locomotiveOverviewData={globalState.locomotivesOverviewData}
          />
          <div className="failures">
            <FailureHistory />
          </div>
        </div>
        <div className="map-overview-container">
          <MapCenterPanel />
        </div>
      </div>
    </div>
  );
};

export default CenterPanel;
