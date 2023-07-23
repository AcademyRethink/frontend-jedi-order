import { useEffect } from "react";
import useReportsViewModel from "../../viewmodel/useReportsViewModel";
import ImageAndWriting from "../ImageAndWriting";
import "./styles.css";

const FailureHistory = () => {
  const { getLastFourReports, reports } = useReportsViewModel();

  useEffect(() => {
    getLastFourReports();
  }, []);

  return (
    <div className="failureHistory">
      <div className="text">
        <h1>Histórico de falhas</h1>
      </div>

      <div className="reports-container">
        {reports.length > 0 &&
          reports.map((report) => (
            <div className="StatusOflocomotive" key={report.id}>
              <div className="title">
                <ImageAndWriting
                  icon="error"
                  label={report.description}
                  color="secundary"
                  fontSize="2rem"
                />
                <div className="time-and-date">
                  <div className="time">{report.time.slice(0, 5)}</div>
                  <div className="date">{"| " + report.date.slice(0, 5)}</div>
                </div>
              </div>
              <div className="statusDescriptions">
                <ImageAndWriting
                  icon="train"
                  label={report.locomotive}
                  fontSize="2rem"
                />
                <ImageAndWriting
                  icon="person"
                  label={report.driver}
                  fontSize="2rem"
                />
                <ImageAndWriting
                  icon="location"
                  label={report.location}
                  fontSize="2rem"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FailureHistory;
