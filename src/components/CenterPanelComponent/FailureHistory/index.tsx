import "./styles.css";
import ImageAndWriting from "../../ImageAndWriting";

const FailureHistory = ({ time, date }: { time: number; date: number }) => {
  return (
    <div className="failureHistory">
      <div className="text">Histórico de falhas</div>

      {[
        { icon: "error", label: "Rádio sem bateria" },
        { icon: "error", label: "Controle inoperante" },
        { icon: "error", label: "Rádio sem bateria" },
        { icon: "error", label: "Rádio sem bateria" },
      ].map((item) => (
        <div className="StatusOflocomotive">
          <div className="title">
            <ImageAndWriting
              icon="error"
              label={item.label}
              color="secundary"
            />
            <div className="time">{time}</div>
            <div className="date">{date}</div>
          </div>
          <div className="statusDescriptions">
            <ImageAndWriting icon="train" label={item.label} />
            <ImageAndWriting icon="person" label={item.label} />
            <ImageAndWriting icon="location" label={item.label} />
          </div>
        </div>
      ))}
      {/* fazer aquele de ficar azul e puxar pra tela , para repetir componente + dado do BD*/}

      {/* esse dado tem q vir do bd */}
    </div>
  );
};

export default FailureHistory;
