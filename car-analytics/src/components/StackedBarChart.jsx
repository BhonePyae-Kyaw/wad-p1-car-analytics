// StackedBarChart.jsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function StackedBarChart({ carData }) {
  const brands = carData.map((item) => item.brand);
  const allModels = new Set();

  carData.forEach((brand) => {
    brand.models.forEach((model) => {
      allModels.add(model.model);
    });
  });

  const generateUniqueColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(`hsl(${(i * 360) / count}, 70%, 50%)`);
    }
    return colors;
  };

  const uniqueColors = generateUniqueColors(allModels.size);

  const datasets = Array.from(allModels).map((model, index) => {
    const data = carData.map((brand) => {
      const modelData = brand.models.find((m) => m.model === model);
      return modelData ? modelData.count : 0;
    });

    return {
      label: model,
      data: data,
      backgroundColor: uniqueColors[index],
    };
  });

  datasets.sort(
    (a, b) =>
      b.data.reduce((sum, val) => sum + val, 0) -
      a.data.reduce((sum, val) => sum + val, 0)
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Car Models Distribution by Brand Chart",
        font: {
          size: 18,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = {
    labels: brands,
    datasets: datasets,
  };

  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <div style={{ width: "80%", height: "100%", paddingRight: "20px" }}>
        <Bar options={options} data={data} />
      </div>
      <div
        style={{
          width: "20%",
          height: "100%",
          overflowY: "auto",
          paddingLeft: "20px",
          borderLeft: "1px solid #e0e0e0",
        }}
      >
        {datasets.map((dataset, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", margin: "5px 0" }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: dataset.backgroundColor,
                marginRight: "5px",
              }}
            ></div>
            <span style={{ fontSize: "10px" }}>{dataset.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackedBarChart;
