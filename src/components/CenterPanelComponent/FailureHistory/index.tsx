import "./styles.css";
import ImageAndWriting from "../../ImageAndWriting";
import useReportsViewModel from "../../../viewmodel/useReportsViewModel";
import { useEffect } from "react";

const FailureHistory = ({ time, date }: { time: number; date: number }) => {
  const { getLastFourReports, reports } = useReportsViewModel();
  useEffect(() => {
    getLastFourReports();
  }, []);

  return (
    <div className="failureHistory">
      <div className="text">Histórico de falhas</div>

      {reports.length > 0 &&
        reports.map((report) => (
          <div className="StatusOflocomotive">
            <div className="title">
              <ImageAndWriting
                icon="error"
                label={report.description}
                color="secundary"
              />
              <div className="time">{report.time.slice(0, 5)}</div>
              <div className="date">{"| " + report.date.slice(0, 5)}</div>
            </div>
            <div className="statusDescriptions">
              <ImageAndWriting icon="train" label={report.locomotive} />
              <ImageAndWriting icon="person" label={report.driver} />
              <ImageAndWriting icon="location" label={report.location} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default FailureHistory;
