import "./styles.css";
import Button from "../../components/Button";
import useAnalysisViewController from "./useAnalysisViewController";
import ModalToExport from "../../components/ModalToExport";
import DateForm from "../../components/ExportCsvForm";
import ChartForm from "../../components/Charts/barChart/form";
import BarChart from "../../components/Charts/barChart/barChart";
import RadioBarChart from "../../components/Charts/chartWithRadioOptions/chartWithRadioOptions";
import ReportTable from "../../components/ReportTable";
import { useState } from "react";
import { FormValues } from "../../types/charts";
import ChartBarWithDateAndFailureFilter from "../../components/Charts/barChart";

const Analysis = () => {
  const {
    closeModal,
    isModalOpen,
    openModal,
    failureTypes,
    failureData,
    getFailureData,
  } = useAnalysisViewController();
  const [formData, setFormData] = useState<FormValues>({
    startDate: "2023-01-01",
    endDate: "2023-07-31",
    failureType: 2,
  });

  const handleSubmitFailureDataForm = (formValues: FormValues) => {
    setFormData(formValues);
    getFailureData(formData);
  };

  const hasData = failureData.length > 0;

  return (
    <div className="analysis-screen">
      <div className="analysis-content">
        <div className="export-report">
          Análise de falhas
          <div className="button-report">
            {isModalOpen && <div className="modalOverlay"></div>}
            {isModalOpen && (
              <ModalToExport
                label="Exportar relatório"
                text="Cancelar"
                fontSize="2.4rem"
                showTwoButtons={false}
                background="transparent"
                color="#602809"
                onClick={closeModal}
                paragraph={<DateForm />}
              />
            )}
            <Button
              text="Exportar relatório"
              background="#461901"
              color="#FFF7F2"
              onClick={openModal}
            ></Button>
          </div>
        </div>
        <div className="comparison-content">
          <div className="weekly-comparison">
            <ReportTable />
          </div>
          <div className="monthly-comparison">
            <ChartBarWithDateAndFailureFilter />
            <RadioBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
