import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import Menu from "../components/menu";
import cars from "../assets/json/taladrod-cars.json";
import TableComponent from "../components/table";

function Dashboard() {
  const [carData, setCarData] = useState([]);
  console.log(cars);
  const [brands, setBrands] = useState([]);
  const [carsCount, setCarsCount] = useState([]);

  useEffect(() => {
    const processData = () => {
      const brandModelMap = {};

      cars.Cars.forEach((car) => {
        const brand = car.NameMMT.split(" ")[0]; // Get the brand name
        const model = car.Model; // Get the model name
        const price = parseInt(car.Prc.replace(/,/g, ""), 10); // Remove commas and convert to integer

        if (!brandModelMap[brand]) {
          // If the brand is not in the map, add it
          brandModelMap[brand] = { totalCars: 0, totalValue: 0, models: {} };
        }

        brandModelMap[brand].totalCars += 1; // Increment the total cars
        brandModelMap[brand].totalValue += price; // Increment the total value

        if (!brandModelMap[brand].models[model]) {
          // If the model is not in the map, add it
          brandModelMap[brand].models[model] = { count: 0, value: 0 }; // Initialize the count and value
        }

        brandModelMap[brand].models[model].count += 1; // Increment the count
        brandModelMap[brand].models[model].value += price; // Increment the value
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

  console.log(carData);
  console.log(brands); // use these for the charts (Pie chart)
  console.log(carsCount); // use these for the charts (Pie chart)

  return (
    <div id="dashboard">
      <Menu />
      {/* Charts starts here */}
      <div>Pie Chart</div>
      <div>Bar Chart</div>
      <div className="dashboard-content">
        <TableComponent carData={carData} />
      </div>
      {/* Car showing starts here */}
      <div>Cars showing</div>
    </div>
  );
}

export default Dashboard;
