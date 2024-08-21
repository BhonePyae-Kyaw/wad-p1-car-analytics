import React from "react";
import "../styles/table.css";

function TableComponent({ carData }) {
  return (
    <div style={{ width: "100%" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Number of cars</th>
            <th>Total Value (Baht)</th>
          </tr>
        </thead>
        <tbody>
          {carData.map((brandData, index) => (
            <React.Fragment key={index}>
              <tr className="table-car-brand">
                <td colSpan={2}>{brandData.brand}</td>
                <td>{brandData.totalCars}</td>
                <td>{brandData.totalValue.toLocaleString()}</td>
              </tr>
              {brandData.models.map((modelData, idx) => (
                <tr key={idx} className="model">
                  <td></td>
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
  );
}

export default TableComponent;
