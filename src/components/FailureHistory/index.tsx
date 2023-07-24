import { ReportType } from "../../types/reports";
import ImageAndWriting from "../ImageAndWriting";
import "./styles.css";

type FailureHistoryProps = {
  reports: ReportType[];
};

const FailureHistory = ({ reports }: FailureHistoryProps) => {
  return (
    <div className="failureHistory">
      <div className="text">
        <h1>Histórico de falhas</h1>
      </div>

      <div className="reports-container">
        {reports.length > 0 &&
          reports.map((report) => (
            <div className="StatusOflocomotive" key={report.id}>
              <div className="title" aria-label="Título da falha">
                <ImageAndWriting
                  icon="error"
                  label={report.description}
                  color="secundary"
                  fontSize="2rem"
                />
                <div className="time-and-date">
                  <div className="time" aria-label="Hora do falha">
                    {report.time.slice(0, 5)}
                  </div>
                  <div className="date" aria-label="Dia do falha">
                    {"| " + report.date.slice(0, 5)}
                  </div>
                </div>
              </div>
              <div className="statusDescriptions">
                <ImageAndWriting
                  icon="train"
                  label={report.locomotive}
                  fontSize="2rem"
                  aria-label="Nome da locomotiva com falha"
                />
                <ImageAndWriting
                  icon="person"
                  label={report.driver}
                  fontSize="2rem"
                  aria-label="Maquinista no momento da falha"
                />
                <ImageAndWriting
                  icon="location"
                  label={report.location}
                  fontSize="2rem"
                  aria-label="Local da locomotiva no momento da falha"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FailureHistory;
