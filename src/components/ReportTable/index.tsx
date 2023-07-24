import React, { useState, useEffect } from "react";
import api from "../../model/api/api";

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

  useEffect(() => {
    fetchData(selectedOption);
  }, [selectedOption]);

  if (!reportData?.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(Number(e.target.value))}
      >
        <option value={7}>Últimos 7 dias</option>
        <option value={15}>Últimos 15 dias</option>
        <option value={31}>Últimos 31 dias</option>
        <option value={45}>Últimos 45 dias</option>
      </select>
      <table>{}</table>
    </div>
  );
};

export default ReportTable;
