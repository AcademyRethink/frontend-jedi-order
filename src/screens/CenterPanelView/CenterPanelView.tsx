import useCenterPanelViewController from "./CenterPanelViewController";
import AdministrativeLocomotive from "../../components/AdministrativeLocomotive";
import FailureHistory from "../../components/FailureHistory";
import LoadingComponent from "../../components/Loading";
import Map from "../../components/Map";
import "./styles.css";

const CenterPanel = () => {
  const { center, globalState } = useCenterPanelViewController();

  if (
    !globalState.locomotivesOverviewData ||
    !globalState.lastFourReports ||
    !globalState.locomotivesRouteDetails
  )
    return <LoadingComponent />;

  return (
    <div className="center-panel-screen-container">
      <div className="overview-info">
        <div className="admLocomotives">
          <div tabIndex={-1} aria-hidden="true"></div>
          <AdministrativeLocomotive
            locomotiveOverviewData={globalState.locomotivesOverviewData}
            aria-label="Informações da Locomotiva Administrativa"
          />
          <div
            className="failures"
            tabIndex={0}
            aria-label="Histórico de Falhas"
          >
            <FailureHistory reports={globalState.lastFourReports} />
          </div>
        </div>
        <div className="map-overview-container">
          <div className="center-panel-map-container" tabIndex={0}>
            <Map
              center={center}
              locomotivesRouteDetails={globalState.locomotivesRouteDetails}
              aria-label="Mapa de Visão Geral"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterPanel;
