import "./styles.css";

const AdministrativeLocomotive = ({
  locomotivesTotal,
  locomotivesRunning,
  locomotivesMaintenance,
  locomotivesStopped,
}: {
  locomotivesTotal: number;
  locomotivesRunning: number;
  locomotivesMaintenance: number;
  locomotivesStopped: number;
}) => {
  return (
    <div className="administrativeLocomotive">
      <div className="text">
        <h1>Painel central</h1>
        <h3>Locomotivas administradas</h3>
      </div>

      <div className="statusOfLocomotives">
        <div className="total">
          <h1>{locomotivesTotal}</h1>
          {/* <h1>6</h1> esse dado tem q vir do bd */}
          <h3>Total de locomotivas</h3>
          {/* <h3>Total de locomotivas</h3> */}
        </div>
        {/* fazer aquele de ficar azul e puxar pra tela , para repetir componente */}
        <div className="locomotives-overview-data-container">
          <div className="locomotives-status">
            <h1>{locomotivesRunning}</h1>
            <h3>Em movimento</h3>
          </div>
          <div className="locomotives-status border">
            <h1>{locomotivesMaintenance}</h1>
            <h3>Em manutenção</h3>
          </div>
          <div className="locomotives-status">
            <h1>{locomotivesStopped}</h1>
            <h3>Locomotivas paradas</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministrativeLocomotive;
