import React, { useEffect, useState } from "react";
import { useFailureTypes, useFailureData } from "../../../hooks/barChart";
import {
  FailureType,
  FailureData,
  FailureDataMonth,
  ChartData,
} from "../../../types/charts";
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
import { fetchFailureDataCount } from "../../../model/api/failureCommunicationChartBar";
import "./styles.css";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RadioBarChart: React.FC = () => {
  const failureTypes = useFailureTypes();
  const [selectedFailureType, setSelectedFailureType] = useState<number | null>(
    null
  );
  const [failureData, setFailureData] = useState<FailureDataMonth[]>([]);

  useEffect(() => {
    if (failureTypes.length > 0 && selectedFailureType === null) {
      setSelectedFailureType(failureTypes[0].id);
    }

    if (selectedFailureType !== null) {
      fetchFailureDataCount(selectedFailureType)
        .then((data) => setFailureData(data))
        .catch((error) => console.error("Error fetching failure data:", error));
    }
  }, [selectedFailureType, failureTypes]);

  const getBarColors = () => {
    return failureData
      .map((_, index) =>
        index % 2 === 0 ? "rgba(194, 84, 25, 1)" : "rgba(128, 55, 16, 1)"
      )
      .join(",");
  };

  const chartData: ChartData = {
    labels: failureData.map((data) => translateMonth(data.month.trim())),
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
    <div className="fullcontainer">
      <div className="chart-title">Por problema</div>
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
    </div>
  );
};

export default RadioBarChart;
