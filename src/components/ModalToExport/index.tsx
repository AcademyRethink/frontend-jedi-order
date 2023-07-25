import "./styles.css";
import CloseIcon from "@mui/icons-material/Close";

const ModalToExport = ({
  children,
  onClick,
}: {
  children?: any;
  onClick: () => void;
}) => {
  return (
    <div className="modalCard-export">
      <div className="containerCardModal-export">
        <div className="export-modal-header">
          <div className="export-modal-header-text">
            <h2>Exportar relatório</h2>
            <p>Referente a todos os dados</p>
          </div>
          <button onClick={onClick}>
            <CloseIcon className="icon-size locomotive-modal-close-icon" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalToExport;
