import React, { useState } from "react";
import "./styles.css";
import { FormularioProps } from "../../../types/charts";

const ChartForm: React.FC<FormularioProps> = ({ onSubmit, failureTypes }) => {
  const [startDate, setStartDate] = useState("04/2023");

  const [endDate, setEndDate] = useState("07/2023");
  const [failureType, setFailureType] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    onSubmit({
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      failureType,
    });
  };

  const formatDate = (dateString: string): string => {
    const [month, year] = dateString.split("/");
    return `${year}-${month}-01`;
  };

  return (
    <div className="master-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="first-line">
          <label>
            Defina o mês inicial
            <div className="input-container">
              <input
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                pattern="\d{2}/\d{4}"
                title="Digite o mês (mm) e o ano (aaaa) no formato mm/aaaa"
              />
              <span className="material-icons">calendar_today</span>
            </div>
          </label>
          <label>
            Defina o mês final
            <div className="input-container">
              <input
                type="text"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                pattern="\d{2}/\d{4}"
                title="Digite o mês (mm) e o ano (aaaa) no formato mm/aaaa"
              />
              <span className="material-icons">calendar_today</span>
            </div>
          </label>

          <button type="submit">Exibir dados</button>
        </div>
        <div className="chart-title">Por locomotiva</div>
        <div className="second-line">
          <div className="failure-select-container">
            <label>
              Selecione o problema
              <select
                className="custom-select"
                value={failureType}
                onChange={(e) => setFailureType(parseInt(e.target.value))}
              >
                <option value={0}>Selecione o problema</option>
                {failureTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.failure_type}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChartForm;
