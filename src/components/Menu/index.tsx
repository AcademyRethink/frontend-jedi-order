import { SvgIconTypeMap } from "@mui/material";
import "./styles.css";
import { OverridableComponent } from "@mui/material/OverridableComponent";

const Menu = ({
  icon,
  label,
}: {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  label?: string;
}) => {
  const Icon = icon;
  return (
    <div className="menu">
      <div className="buttons">
        <Icon htmlColor="#FFF7F2" style={{ height: 32, width: 32 }} />
        <label className="label">{label}</label>
      </div>
    </div>
  );
};
export default Menu;
