import "./styles.css";

type InfoBoxWithLabelProps = {
  label: string;
  text: string;
  iconChildren?: React.ReactNode;
};

const InfoBoxWithLabel = ({
  label,
  text,
  iconChildren,
}: InfoBoxWithLabelProps) => {
  return (
    <div className="locomotive-modal-info-field-box">
      <label htmlFor={label}>{label}</label>
      <div className="text-field">
        <h2>{text}</h2>
        {iconChildren}
      </div>
    </div>
  );
};

export default InfoBoxWithLabel;
