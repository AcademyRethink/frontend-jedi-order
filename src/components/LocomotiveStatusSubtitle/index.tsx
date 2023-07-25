import "./styles.css";

type LocomotiveStatusSubtitleProps = {
  icon: string;
  text: React.ReactNode;
  iconAltText: string;
  border?: boolean;
};

const LocomotiveStatusSubtitle = ({
  icon,
  text,
  iconAltText,
  border,
}: LocomotiveStatusSubtitleProps) => {
  return (
    <div
      className={`locomotive-status-subtitle-item ${
        border ? "first-status-child" : ""
      }`}
    >
      <img src={icon} alt={iconAltText} />
      <h4>{text}</h4>
    </div>
  );
};

export default LocomotiveStatusSubtitle;
