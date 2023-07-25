import { useState, useEffect } from "react";
import useCommunicationReportsViewModel from "../../viewmodel/useCommunicationReportsViewModel";
import "./styles.css";

const ReportTable = () => {
  const { failureFilteredByDays, getFilteredFailuresByDays } =
    useCommunicationReportsViewModel();
  const [selectedOption, setSelectedOption] = useState<number>(7);

  useEffect(() => {
    getFilteredFailuresByDays(selectedOption);
  }, [selectedOption]);

  if (!failureFilteredByDays?.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="daily-comparison-container">
      <p>Defina o período</p>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(Number(e.target.value))}
        className="daily-comparison-select"
      >
        <option value={7}>Últimos 7 dias</option>
      </select>
      <div className="tables-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Rádio sem Bateria</th>
              <th>Pane no sistema</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08/07/2023</td>
              <td>2</td>
              <td>0</td>
            </tr>
            <tr>
              <td>12/07/2023</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>15/07/2023</td>
              <td>4</td>
              <td>0</td>
            </tr>
            <tr className="total-row">
              <td>Total</td>
              <td id="totalRadios">10</td>
              <td id="totalPanes">1</td>
            </tr>
          </tbody>
        </table>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Controle inoperante</th>
              <th>Descarrilamento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08/07/2023</td>
              <td>4</td>
              <td>1</td>
            </tr>
            <tr>
              <td>12/07/2023</td>
              <td>6</td>
              <td>0</td>
            </tr>
            <tr>
              <td>15/07/2023</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr className="total-row">
              <td>Total</td>
              <td id="totalRadios">11</td>
              <td id="totalPanes">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportTable;
