import { memo } from "react";
import Skeletons from "../Skeleton";
import "./styles.css";

const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <div className="expandButton">
        <Skeletons />
      </div>
      <div className="menuContainer">
        <div className="menuButton">
          <Skeletons />
        </div>
        <div className="menuButton">
          <Skeletons />
        </div>
        <div className="menuButton">
          <Skeletons />
        </div>
      </div>
      <div className="myAcountButton">
        <Skeletons />
      </div>
    </div>
  );
};

export default memo(SideBar);
