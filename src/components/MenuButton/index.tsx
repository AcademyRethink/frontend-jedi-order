import { SvgIconTypeMap } from "@mui/material";
import "./styles.css";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useNavigate } from "react-router-dom";

interface MenuButtonProps {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  label?: string;
  redirectTo: string;
  isActive: boolean;
}

const MenuButton = ({ icon, label, redirectTo, isActive }: MenuButtonProps) => {
  const navigate = useNavigate();

  const handleClickOnButton = (redirectTo: string) => {
    navigate(redirectTo);
  };

  const Icon = icon;
  return (
    <button
      className="menu-sidebar-container-button"
      onClick={() => handleClickOnButton(redirectTo)}
    >
      <div className="menu-button-container">
        <div
          className={`menu-button-icon-container ${
            isActive ? "menu-button-icon-container-active" : ""
          }`}
        >
          <Icon htmlColor="#FFF7F2" style={{ height: 32, width: 32 }} />
        </div>
        <h1 className="menu-button-label">{label}</h1>
      </div>
    </button>
  );
};
export default MenuButton;
