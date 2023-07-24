import { LocomotiveOverviewDTO } from "../../types/locomotives";
import "./styles.css";

type AdministrativeLocomotiveProps = {
  locomotiveOverviewData: LocomotiveOverviewDTO;
};

const AdministrativeLocomotive = ({
  locomotiveOverviewData,
}: AdministrativeLocomotiveProps) => {
  return (
    <div className="administrativeLocomotive" tabIndex={0}>
      <div className="text">
        <h1>Painel central</h1>
        <h3>Locomotivas administradas</h3>
      </div>

      <div className="statusOfLocomotives">
        <div className="total">
          <h1>{locomotiveOverviewData.totalLocomotive}</h1>
          <h3>Total de locomotivas</h3>
        </div>
        <div className="locomotives-overview-data-container">
          <div className="locomotives-status">
            <h1>{locomotiveOverviewData["Em movimento"]}</h1>
            <h3>Em movimento</h3>
          </div>
          <div className="locomotives-status border">
            <h1>{locomotiveOverviewData["Em manutenção"]}</h1>
            <h3>Em manutenção</h3>
          </div>
          <div className="locomotives-status">
            <h1>{locomotiveOverviewData["Locomotiva parada"]}</h1>
            <h3>Locomotivas paradas</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministrativeLocomotive;
