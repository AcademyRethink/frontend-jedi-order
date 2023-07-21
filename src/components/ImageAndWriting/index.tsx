import "./styles.css";
import TrainIcon from "@mui/icons-material/Train";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

type ImageAndWritingProps = {
  icon: "train" | "person" | "location" | "error";
  label: string;
  color?: "primary" | "secundary" | "tertiary";
  fontSize?: string;
};

const ImageAndWriting = ({
  icon,
  label,
  color = "primary",
  fontSize = "2.4rem",
}: ImageAndWritingProps) => {
  const colorLibrary = {
    primary: "#9A4D23",
    secundary: "#FFF7F2",
    tertiary: "#232323",
  };

  const IconsLibrary = {
    train: (
      <TrainIcon
        htmlColor={colorLibrary[color]}
        style={{ height: 24, width: 24 }}
      />
    ),
    person: (
      <PersonOutlineIcon
        htmlColor={colorLibrary[color]}
        style={{ height: 24, width: 24 }}
      />
    ),
    location: (
      <LocationOnIcon
        htmlColor={colorLibrary[color]}
        style={{ height: 24, width: 24 }}
      />
    ),
    error: (
      <ErrorOutlineIcon
        htmlColor={colorLibrary[color]}
        style={{ height: 24, width: 24 }}
      />
    ),
  };

  return (
    <div className="imageAndWriting">
      {IconsLibrary[icon]}
      <label
        className={`imageAndWriting-${color}`}
        style={{ fontSize: fontSize }}
      >
        {label}
      </label>
    </div>
  );
};

export default ImageAndWriting;
