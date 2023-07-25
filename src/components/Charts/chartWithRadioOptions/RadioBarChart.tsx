import React, { useEffect, useState } from "react";
import { ChartData, FailureDataMonth } from "../../../types/charts";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import translateMonth from "../../../utils/translateMonthsNames";
import { Bar } from "react-chartjs-2";
import "./styles.css";
import useCommunicationReportsViewModel from "../../../viewmodel/useCommunicationReportsViewModel";
import { useGlobalContext } from "../../../context/GlobalContext";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RadioBarChart: React.FC = () => {
  const { globalState } = useGlobalContext();
  const { failureDataCount, getFailureDataCount } =
    useCommunicationReportsViewModel();

  const [selectedFailureType, setSelectedFailureType] = useState<number>(1);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: "Quantidade",
        data: [],
        backgroundColor: [],
        borderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    if (!failureDataCount.length) return;
    const data = getChartData(failureDataCount);
    setChartData({
      labels: data.translatedMonths,
      datasets: [
        {
          label: "Quantidade",
          data: data.data,
          backgroundColor: data.backgroundColor,
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 1,
        },
      ],
    });
  }, [failureDataCount]);

  const getChartData = (failureDataCount: FailureDataMonth[]) => {
    const translatedMonths = failureDataCount.map((data) =>
      translateMonth(data.month.trim())
    );
    const data = failureDataCount.map((data) => data.count);
    const backgroundColor = failureDataCount.map((_, index) =>
      index % 2 === 0 ? "rgba(194, 84, 25, 1)" : "rgba(128, 55, 16, 1)"
    );

    return { translatedMonths, data, backgroundColor };
  };

  useEffect(() => {
    if (globalState.failureTypes && selectedFailureType === null) {
      setSelectedFailureType(globalState.failureTypes[0].id);
    }
  }, []);

  useEffect(() => {
    getFailureDataCount(selectedFailureType);
  }, [selectedFailureType]);

  return (
    <div className="fullcontainer">
      <div className="chart-title">Por problema</div>
      <div className="radio-bar-chart">
        <div className="chart-container">
          {failureDataCount.length > 0 ? (
            <Bar
              data={chartData}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          ) : (
            <p>Não há registros com os dados informados.</p>
          )}
        </div>
        <div className="radio-items">
          {globalState.failureTypes &&
            globalState.failureTypes.map((failureType) => (
              <div className="item" key={failureType.id}>
                <input
                  type="radio"
                  name="failureType"
                  value={failureType.id}
                  checked={selectedFailureType === failureType.id}
                  onChange={() => setSelectedFailureType(failureType.id)}
                />
                <label>{failureType.failure_type}</label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RadioBarChart;
