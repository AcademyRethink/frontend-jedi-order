import useCenterPanelViewController from "./CenterPanelViewController";
import AdministrativeLocomotive from "../../components/AdministrativeLocomotive";
import FailureHistory from "../../components/FailureHistory";
import LoadingComponent from "../../components/Loading";
import Map from "../../components/Map";
import "./styles.css";

const CenterPanel = () => {
  const { center, globalState, reports } = useCenterPanelViewController();

  if (
    !globalState.locomotivesOverviewData ||
    !reports ||
    !globalState.locomotivesRouteDetails
  )
    return <LoadingComponent />;

  return (
    <div className="center-panel-screen-container">
      <div className="overview-info">
        <div className="admLocomotives">
          <AdministrativeLocomotive
            locomotiveOverviewData={globalState.locomotivesOverviewData}
          />
          <div className="failures">
            <FailureHistory reports={reports} />
          </div>
        </div>
        <div className="map-overview-container">
          <div className="center-panel-map-container">
            <Map
              center={center}
              locomotivesRouteDetails={globalState.locomotivesRouteDetails}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterPanel;
