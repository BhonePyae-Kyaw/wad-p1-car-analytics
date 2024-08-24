// Dashboard.jsx
import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import Menu from "../components/menu";
import cars from "../assets/json/taladrod-cars.json";
import TableComponent from "../components/table";
import DoughnutChart from "../components/DoughnutChart";
import StackedBarChart from "../components/StackedBarChart";

function Dashboard() {
  const [carData, setCarData] = useState([]);
  const [brands, setBrands] = useState([]);
  const [carsCount, setCarsCount] = useState([]);

  useEffect(() => {
    const processData = () => {
      const brandModelMap = {};

      cars.Cars.forEach((car) => {
        const brand = car.NameMMT.split(" ")[0];
        const model = car.Model;
        const price = parseInt(car.Prc.replace(/[^0-9]/g, ""), 10); //remove non-numeric characters

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
      const brands = formattedData.map((data) => data.brand);
      const carsCount = formattedData.map((data) => data.totalCars);
      setCarData(formattedData);
      setBrands(brands);
      setCarsCount(carsCount);
    };

    processData();
  }, []);

  return (
    <div id="dashboard">
      <Menu />
      {/* Charts start here */}
      <div
        className="charts-container"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "20px",
          padding: "10px",
          height: "100%",
        }}
      >
        <div style={{ flex: 1, minHeight: "0" }}>
          <DoughnutChart brands={brands} carsCount={carsCount} />
        </div>
        <div style={{ flex: 1, minHeight: "0" }}>
          <StackedBarChart carData={carData} />
        </div>
      </div>
      <div className="dashboard-content">
        <TableComponent carData={carData} />
      </div>
      {/* Car showing starts here */}
      <div>Cars showing</div>
    </div>
  );
}

export default Dashboard;
