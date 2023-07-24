import React, { useEffect, useState } from "react";
import { ChartData } from "../../../types/charts";
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
import useAnalysisViewController from "../../../screens/Analysis/useAnalysisViewController";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RadioBarChart: React.FC = () => {
  const { failureTypes, failureData, getFailureDataCount, failureDataCount } =
    useAnalysisViewController();
  console.log(failureTypes);
  const [selectedFailureType, setSelectedFailureType] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (failureTypes.length > 0 && selectedFailureType === null) {
      setSelectedFailureType(failureTypes[0].id);
    }

    if (selectedFailureType !== null) {
      getFailureDataCount(selectedFailureType);
      console.log(failureDataCount);
    }
  }, [failureData, failureTypes, getFailureDataCount, selectedFailureType]);

  const getBarColors = () => {
    return failureData
      .map((_, index) =>
        index % 2 === 0 ? "rgba(194, 84, 25, 1)" : "rgba(128, 55, 16, 1)"
      )
      .join(",");
  };
  let translatedMonths: string[] = [];

  if (failureDataCount) {
    translatedMonths = failureDataCount.map((data) =>
      translateMonth(data.month.trim())
    );
  }

  const chartData: ChartData = {
    labels: translatedMonths,
    datasets: [
      {
        label: "Quantidade",
        data: failureData.map((data) => data.count),
        backgroundColor: failureData.map((_, index) =>
          index % 2 === 0 ? "rgba(194, 84, 25, 1)" : "rgba(128, 55, 16, 1)"
        ),
        borderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="radio-bar-chart">
      <div className="chart-container">
        {failureData.length > 0 ? (
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
        {failureTypes.map((failureType) => (
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
  );
};

export default RadioBarChart;
