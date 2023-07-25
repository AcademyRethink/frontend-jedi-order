import React, { useState, useEffect } from "react";
import api from "../../model/api/api";
import "./styles.css";

const ReportTable = () => {
  const [selectedOption, setSelectedOption] = useState(7);
  const [reportData, setReportData] = useState<
    { date: string; reports: Record<string, string> }[]
  >([]);

  const fetchData = async (days: number) => {
    try {
      const response = await api.get(
        `/communication-reports/filterbysubjectanddays/${days}`
      );
      setReportData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect(() => {
  //   fetchData(selectedOption);
  // }, [selectedOption]);

  // if (!reportData?.length) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="ReportTable">
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(Number(e.target.value))}
      >
        <option value={7}>Últimos 7 dias</option>
        <option value={15}>Últimos 15 dias</option>
        <option value={31}>Últimos 31 dias</option>
        <option value={45}>Últimos 45 dias</option>
      </select>
      <table className="tabela">
        <thead>
          <tr>
            <th>Data</th>
            <th>Rádio sem Bateria</th>
            <th>Pane no sistema</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01/07/2023</td>
            <td>3</td>
            <td>1</td>
          </tr>
          <tr>
            <td>03/07/2023</td>
            <td>0</td>
            <td>2</td>
          </tr>
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
          <div className="total">
            <tr>
              <h2>Total</h2>
              <h2>10</h2>
              <h2>4</h2>
            </tr>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
