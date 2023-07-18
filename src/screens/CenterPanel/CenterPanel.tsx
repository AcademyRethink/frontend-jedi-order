import CenterPanelComponent from "../../components/CenterPanelComponent";
import SideBar from "../../components/SideBar";

import "./styles.css";

const CenterPanel = () => {
  return (
    <div className="screen">
      <SideBar />
      <CenterPanelComponent />
    </div>
  );
};

export default CenterPanel;
