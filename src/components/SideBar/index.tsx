import { memo } from "react";
import Menu from "../Menu";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import "./styles.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <div className="expandButton">
        <img src={"/Vector.png"} alt="logo: Tecnovia" />
      </div>
      <div className="menuContainer">
        <div className="menuButton">
          <Menu icon={DashboardOutlinedIcon} label="Painel central" />
        </div>
        <div className="menuButton">
          <Menu icon={FmdGoodOutlinedIcon} label="Mapa" />
        </div>
        <div className="menuButton">
          <Menu icon={TrendingUpOutlinedIcon} label="Análises" />
        </div>
      </div>
      <div className="myAcountButton">
        <AccountCircleOutlinedIcon
          htmlColor="#FFF7F2"
          style={{ height: 40, width: 40 }}
        />
      </div>
    </div>
  );
};

export default memo(SideBar);
