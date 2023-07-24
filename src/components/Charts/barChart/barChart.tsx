import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartBarProps, DataChart } from "../../../types/charts";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC<ChartBarProps> = ({ data }) => {
  const chartData = {
    labels: data.map((dado) => dado.locomotive),
    datasets: [
      {
        label: "Quantidade",
        data: data.map((dado) => dado.count),
        backgroundColor: data.map((_, index) =>
          index % 2 === 0 ? "rgba(194, 84, 25, 1)" : "rgba(128, 55, 16, 1)"
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Defina a opção "display" como false para remover a legenda
      },
      title: {
        display: false,
        text: "Gráfico de falhas por locomotiva e data",
      },
    },
    x: {
      ticks: {
        color: "rgba(45, 45, 45, 1)",
        font: {
          family: "Roboto",
          size: 16,
          style: "normal",
          weight: 400,
        },
      },
      y: {
        ticks: {
          color: "rgba(45, 45, 45, 1)",
          font: {
            family: "Roboto",
            size: 16,
            style: "normal",
            weight: 400,
          },
          precision: 0,
          stepSize: 1,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container-first">
      {" "}
      <Bar data={chartData} options={chartOptions} />;{" "}
    </div>
  );
};

export default BarChart;
