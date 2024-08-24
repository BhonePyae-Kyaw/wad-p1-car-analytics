// DoughnutChart.jsx
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ brands, carsCount }) {
  const total = carsCount.reduce((acc, count) => acc + count, 0);
  const percentages = carsCount.map(count => ((count / total) * 100).toFixed(1));

  const generateUniqueColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(`hsl(${(i * 360) / count}, 70%, 50%)`);
    }
    return colors;
  };

  const uniqueColors = generateUniqueColors(brands.length);

  const sortedData = brands.map((brand, index) => ({
    brand,
    count: carsCount[index],
    percentage: percentages[index],
    color: uniqueColors[index],
  })).sort((a, b) => b.count - a.count);

  const doughnutChartData = {
    labels: sortedData.map(item => `${item.brand} (${item.percentage}%)`),
    datasets: [
      {
        label: 'Number of Cars',
        data: sortedData.map(item => item.count),
        backgroundColor: sortedData.map(item => item.color),
        borderColor: sortedData.map(item => item.color.replace('0.6', '1')),
        borderWidth: 1,
      },
    ],
  };

  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Car Brands Distribution',
        font: {
          size: 18,
        },
      },
    },
    cutout: '50%',
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex' }}>
      <div style={{ width: '80%', height: '100%', paddingRight: '20px' }}>
        <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
      </div>
      <div style={{ width: '20%', height: '100%', overflowY: 'auto', paddingLeft: '20px', borderLeft: '1px solid #e0e0e0' }}>
        {sortedData.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: item.color, marginRight: '5px' }}></div>
            <span style={{ fontSize: '10px' }}>{`${item.brand} (${item.percentage}%)`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoughnutChart;