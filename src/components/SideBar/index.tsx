import { memo } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import "./styles.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuButton from "../MenuButton";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const handleClickOnProfileButton = () => {
    navigate("/minha-conta");
  };
  return (
    <div className="sideBarContainer">
      <div className="side-bar-logo-image">
        <img src={"/TecnoviaLogo.svg"} alt="logo: Tecnovia" />
      </div>
      <div className="menuContainer">
        <MenuButton
          icon={DashboardOutlinedIcon}
          label="Painel central"
          redirectTo="/painel-central"
        />
        <MenuButton
          icon={FmdGoodOutlinedIcon}
          label="Mapa"
          redirectTo="/mapa"
        />
        <MenuButton
          icon={TrendingUpOutlinedIcon}
          label="Análises"
          redirectTo="/mapa"
        />
      </div>
      <button
        className="myAcountButton"
        onClick={() => handleClickOnProfileButton()}
      >
        <AccountCircleOutlinedIcon
          htmlColor="#FFF7F2"
          style={{ height: 40, width: 40 }}
        />
      </button>
    </div>
  );
};

export default memo(SideBar);
