import { useNavigate } from "react-router-dom";
import CenterPanelComponent from "../../components/CenterPanelComponent";
import SideBar from "../../components/SideBar";
import { useLocomotivesPosition } from "../../hooks/useLocomotivesPosition";

import "./styles.css";

const CenterPanel = () => {
  useLocomotivesPosition();
  const navigate = useNavigate();

  // setTimeout(() => {
  //   navigate("/map");
  // }, 15000);

  return (
    <div className="center-panel-screen-container">
      <SideBar />
      <CenterPanelComponent />
    </div>
  );
};

export default CenterPanel;
