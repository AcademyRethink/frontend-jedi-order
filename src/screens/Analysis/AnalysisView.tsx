import "./styles.css";
import useAnalysisViewController from "./useAnalysisViewController";
import BarChart from "../../components/Charts/barChart/barChart";
import RadioBarChart from "../../components/Charts/chartWithRadioOptions/RadioBarChart";
import ReportTable from "../../components/ReportTable";
import { useEffect, useState } from "react";
import { FormValues } from "../../types/charts";
import { formatDate } from "../../utils/formatDate";

const Analysis = () => {
  const { failureTypes, failureData, getFailureData } =
    useAnalysisViewController();

  const [initialDate, setInitialDate] = useState("04/2023");
  const [finalDate, setFinalDate] = useState("07/2023");
  const [failureTypeId, setFailureTypeId] = useState(1);
  const [formData, setFormData] = useState<FormValues>({
    startDate: "2023-01-01",
    endDate: "2023-07-31",
    failureType: 1,
  });

  const handleSubmitFailureDataForm = (event: React.FormEvent) => {
    event.preventDefault();
    const formattedStartDate = formatDate(initialDate, "start");
    const formattedEndDate = formatDate(finalDate, "end");
    setFormData({
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      failureType: failureTypeId,
    });
    getFailureData(formData);
  };

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      failureType: failureTypeId,
    }));

    getFailureData(formData);
  }, [failureTypeId]);

  const hasData = failureData.length > 0;

  return (
    <div className="analysis-screen">
      <div className="analysis-content">
        <div className="export-report">Análise de falhas</div>
        <div className="comparison-content">
          <div className="weekly-comparison">
            <p>Comparativo diário</p>
            <div className="weekly-comparison-content">
              <ReportTable />
            </div>
          </div>
          <div className="monthly-comparison">
            <p>Comparativo mensal</p>
            <div className="monthly-comparison-container">
              <div>
                {" "}
                <div className="master-container">
                  <form
                    className="form-container"
                    onSubmit={handleSubmitFailureDataForm}
                  >
                    <div className="first-line">
                      <label>
                        Defina o mês inicial
                        <div className="input-container">
                          <input
                            type="text"
                            value={initialDate}
                            onChange={(e) => setInitialDate(e.target.value)}
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
                            value={finalDate}
                            onChange={(e) => setFinalDate(e.target.value)}
                            pattern="\d{2}/\d{4}"
                            title="Digite o mês (mm) e o ano (aaaa) no formato mm/aaaa"
                          />
                          <span className="material-icons">calendar_today</span>
                        </div>
                      </label>
                      <label>
                        Selecione o problema
                        <select
                          className="custom-select"
                          value={failureTypeId}
                          onChange={(e) =>
                            setFailureTypeId(parseInt(e.target.value))
                          }
                        >
                          <option value={0}>Selecione o problema</option>
                          {failureTypes &&
                            failureTypes.map((type) => (
                              <option key={type.id} value={type.id}>
                                {type.failure_type}
                              </option>
                            ))}
                        </select>
                      </label>
                    </div>
                    <div className="chart-title">Por locomotiva</div>

                    <div className="second-line">
                      <div className="failure-select-container">
                        <button type="submit">Exibir dados</button>
                        <div className="bar-chart-container">
                          {hasData ? (
                            <BarChart data={failureData} />
                          ) : (
                            <div className="bar-chart-empty">
                              <p>
                                Não há dados disponíveis com os filtros
                                informados.
                              </p>
                            </div>
                          )}
                        </div>{" "}
                      </div>
                    </div>
                  </form>
                </div>
                <RadioBarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
