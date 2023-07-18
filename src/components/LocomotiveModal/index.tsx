import "./styles.css";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

type LocomotiveDetailProps = {
  locomotiveName: string;
  locomotiveStatus: string;
  locomotiveDriver: string;
  locomotiveLoad: string;
  locomotiveRoute: string;
  handleOnClick: () => void;
};

type Routes = {
  [key: string]: {
    railroad: string;
    from: string;
    to: string;
  };
};

const LocomotiveModal = ({
  locomotiveName,
  locomotiveStatus,
  locomotiveDriver,
  locomotiveLoad,
  locomotiveRoute,
  handleOnClick,
}: LocomotiveDetailProps) => {
  const routeNames: Routes = {
    route1: {
      railroad: "Estrada de Ferro Vitória a Minas",
      from: "Belo Horizonte (MG)",
      to: "Porto Tubarão (ES)",
    },
    route2: {
      railroad: "Estrada de Ferro Vitória a Minas",
      from: "Belo Horizonte (MG)",
      to: "Porto Barra do Riacho (ES)",
    },
    route3: {
      railroad: "Ferrovia Centro-Atlântica",
      from: "Salvador (BA)",
      to: "Belo Horizonte (MG)",
    },
  };

  return (
    <div className="locomotive-modal-box">
      <div className="locomotive-modal-header">
        <div className="locomotive-modal-header-content">
          <div className="locomotive-title-container">
            <TrainOutlinedIcon className="icon-size locomotive-modal-train-icon" />
            <h3>{locomotiveName}</h3>
          </div>
          <button onClick={handleOnClick}>
            <CloseIcon className="icon-size locomotive-modal-close-icon" />
          </button>
        </div>
      </div>

      <div className="locomotive-modal-info-box">
        <div className="locomotive-modal-about-info-box">
          <div className="locomotive-modal-about-info-title">
            <h4>Sobre a locomotiva</h4>
          </div>

          <div className="locomotive-modal-about-info-detail-container">
            <div className="locomotive-modal-about-info-detail">
              <TrackChangesOutlinedIcon className="icon-size" />
              <p>Situação: {locomotiveStatus}</p>
            </div>
            <div className="locomotive-modal-about-info-detail">
              <Person2OutlinedIcon className="icon-size" />
              <p>Maquinista: {locomotiveDriver}</p>
            </div>
            <div className="locomotive-modal-about-info-detail">
              <Inventory2OutlinedIcon className="icon-size" />
              <p>Carga: {locomotiveLoad}</p>
            </div>
          </div>
        </div>

        <div className="locomotive-modal-line"></div>

        <div className="locomotive-modal-location-info-box">
          <div className="locomotive-modal-location-title-box">
            <h4>Informações da rota</h4>
            <div className="locomotive-modal-location">
              <DirectionsOutlinedIcon className="icon-size" />
              <h2>{routeNames[locomotiveRoute].railroad}</h2>
            </div>
          </div>
        </div>

        <div className="locomotive-modal-route-info-box">
          <div className="locomotive-modal-route icons">
            <img src="./route-dots.svg" alt="Location dots icons" />
          </div>
          <div className="locomotive-modal-route-info-fields">
            <div className="locomotive-modal-route-field-box">
              <label htmlFor="Origem">Origem</label>
              <div className="city-field">
                <h2>{routeNames[locomotiveRoute].from}</h2>
              </div>
            </div>
            <div className="locomotive-modal-route-field-box">
              <label htmlFor="Destino">Destino</label>
              <div className="city-field">
                <h2>{routeNames[locomotiveRoute].to}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="locomotive-modal-date-info-box">
          <div className="locomotive-modal-date-field-box">
            <label htmlFor="Partida">Partida</label>
            <div className="date-field">
              <h2>01/06/2023</h2>
              <CalendarTodayIcon />
            </div>
          </div>
          <div className="locomotive-modal-date-field-box">
            <label htmlFor="Chegada">Chegada</label>
            <div className="date-field">
              <h2>------</h2>
              <CalendarTodayIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocomotiveModal;
