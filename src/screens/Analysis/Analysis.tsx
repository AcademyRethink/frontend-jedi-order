import "./styles.css";
import Button from "../../components/Button";
import useAnalysisView from "./useAnalysisView";
import ModalToExport from "../../components/ModalToExport";
import DateForm from "../../components/ExportCsvForm";
import ChartBarWithDateAndFailureFilter from "../../components/Charts/barChart";
import RadioBarChart from "../../components/Charts/chartWithRadioOptions/chartWithRadioOptions";
const Analysis = () => {
  const { closeModal, openModal, isModalOpen } = useAnalysisView();
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
          <div className="weekly-comparison"></div>
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
