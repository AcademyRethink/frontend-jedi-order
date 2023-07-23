import { memo } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import "./styles.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuButton from "../MenuButton";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickOnProfileButton = () => {
    navigate("/minha-conta");
  };

  const menuButtons = [
    {
      icon: DashboardOutlinedIcon,
      label: "Painel central",
      redirectTo: "/painel-central",
    },
    { icon: FmdGoodOutlinedIcon, label: "Mapa", redirectTo: "/mapa" },
    {
      icon: TrendingUpOutlinedIcon,
      label: "Análises",
      redirectTo: "/analises",
    },
  ];

  return (
    <div className="sideBarContainer">
      <div className="side-bar-logo-image">
        <img src={"/TecnoviaLogo.svg"} alt="logo: Tecnovia" />
      </div>
      <div className="menuContainer">
        {menuButtons.map((button, index) => (
          <MenuButton
            key={index}
            icon={button.icon}
            label={button.label}
            redirectTo={button.redirectTo}
            isActive={location.pathname === button.redirectTo}
          />
        ))}
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
