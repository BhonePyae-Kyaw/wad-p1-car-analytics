import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import Menu from "../components/menu";
import cars from "../assets/json/cars.min.json";

function Dashboard() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const processData = () => {
      const brandModelMap = {};

      cars.Cars.forEach((car) => {
        const brand = car.NameMMT.split(" ")[0]; // Assuming brand is the first word in NameMMT
        const model = car.Model;
        const price = parseInt(car.Prc.replace(/,/g, ""), 10); // Remove commas and convert to integer

        if (!brandModelMap[brand]) {
          brandModelMap[brand] = { totalCars: 0, totalValue: 0, models: {} };
        }

        brandModelMap[brand].totalCars += 1;
        brandModelMap[brand].totalValue += price;

        if (!brandModelMap[brand].models[model]) {
          brandModelMap[brand].models[model] = { count: 0, value: 0 };
        }

        brandModelMap[brand].models[model].count += 1;
        brandModelMap[brand].models[model].value += price;
      });

      const formattedData = Object.entries(brandModelMap).map(
        ([brand, data]) => ({
          brand,
          totalCars: data.totalCars,
          totalValue: data.totalValue,
          models: Object.entries(data.models).map(([model, modelData]) => ({
            model,
            count: modelData.count,
            value: modelData.value,
          })),
        })
      );

      setCarData(formattedData);
    };

    processData();
  }, []);

  return (
    <div id="dashboard">
      <Menu />
      <div className="dashboard-content">
        <h1>Car Dashboard</h1>
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Total Cars</th>
              <th>Total Value (Baht)</th>
              <th>Model</th>
              <th>Model Count</th>
              <th>Model Value (Baht)</th>
            </tr>
          </thead>
          <tbody>
            {carData.map((brandData, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td rowSpan={brandData.models.length + 1}>
                    {brandData.brand}
                  </td>
                  <td rowSpan={brandData.models.length + 1}>
                    {brandData.totalCars}
                  </td>
                  <td rowSpan={brandData.models.length + 1}>
                    {brandData.totalValue.toLocaleString()}
                  </td>
                </tr>
                {brandData.models.map((modelData, idx) => (
                  <tr key={idx}>
                    <td>{modelData.model}</td>
                    <td>{modelData.count}</td>
                    <td>{modelData.value.toLocaleString()}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
