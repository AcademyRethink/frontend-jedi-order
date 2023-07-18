import AdministrativeLocomotive from "./AdministrativeLocomotive";
import FailureHistory from "./FailureHistory";
import MapCenterPanel from "./MapCenterPanel";

import "./styles.css";

const CenterPanelComponent = () => {
  return (
    <div className="overview-screen">
      <div className="admLocomotives">
        <AdministrativeLocomotive
          locomotivesTotal="6"
          locomotivesRunning="3"
          locomotivesMaintenance="2"
          locomotivesStopped="1"
        />
        <div className="failures">
          <FailureHistory time="16:43 " date=" | 01/04" />
        </div>
      </div>
      <MapCenterPanel />
    </div>
  );
};

export default CenterPanelComponent;
