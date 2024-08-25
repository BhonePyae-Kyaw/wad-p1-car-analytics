// Dashboard.jsx
import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import Menu from "../components/menu";
import cars from "../assets/json/taladrod-cars.json";
import TableComponent from "../components/table";
import PieChart from "../components/PieChart";
import StackedBarChart from "../components/StackedBarChart";
import Cards from "../components/card";
import Pagination from "../components/pagination";

function Dashboard() {
  const [carData, setCarData] = useState([]);
  const [brands, setBrands] = useState([]);
  const [carsCount, setCarsCount] = useState([]);
  const [filteredCars, setFilteredCars] = useState(cars);
  const [activeMkID, setActiveMkID] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 32;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCars?.Cars.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  useEffect(() => {
    const processData = () => {
      const brandModelMap = {};

      cars.Cars.forEach((car) => {
        const brand = car.NameMMT.split(" ")[0];
        const model = car.Model;
        const price = parseInt(car.Prc.replace(/[^0-9]/g, ""), 10);

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

  const handleFilter = (mkid) => {
    const filteredCars = cars.Cars.filter((car) => car.MkID === mkid);
    setFilteredCars({ Cars: filteredCars });
    setActiveMkID(mkid);
  };

  return (
    <div id="dashboard">
      <Menu />
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
          <PieChart brands={brands} carsCount={carsCount} />
        </div>
        <br />
        <div style={{ flex: 1, minHeight: "0" }}>
          <StackedBarChart carData={carData} />
        </div>
      </div>
      <div className="dashboard-content">
        <TableComponent carData={carData} />
      </div>
      <div id="cars-container">
        <b style={{ fontSize: "24px" }}>Car</b>
        <div className="filter-items">
          {cars.MMList.map((car) => (
            <div
              key={car.mkID}
              className={`car-brand ${activeMkID === car.mkID ? "active" : ""}`}
              onClick={() => handleFilter(car.mkID)}
              style={{
                cursor: "pointer",
                backgroundColor:
                  activeMkID === car.mkID ? "#009879" : "transparent",
                color: activeMkID === car.mkID ? "white" : "black",
              }}
            >
              {car.Name}
            </div>
          ))}
        </div>

        <div className="card-spacing" style={{ marginTop: "20px" }}>
          {currentItems.length === 0 && (
            <p style={{ color: "#009879", fontSize: "24px" }}>
              The car models from this brand are currently out of stock!
            </p>
          )}
          {currentItems.map((car, index) => (
            <Cards key={index} car={car} getHighlights={() => {}} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={filteredCars.Cars.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Dashboard;