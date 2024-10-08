import React, { useState, useEffect } from "react";
import "../styles/highlight.css";
import Menu from "../components/menu";
import Cards from "../components/card";

function Highlight() {
  const [highlightedCars, setHighlightedCars] = useState([]);

  const getHighlights = () => {
    const storedHighlights =
      JSON.parse(localStorage.getItem("highlights")) || [];
    setHighlightedCars(storedHighlights);
  };

  useEffect(() => {
    getHighlights();
  }, []);

  return (
    <div id="highlight">
      <Menu />
      <div className="highlight-content">
        {highlightedCars.length > 0 ? (
          highlightedCars.map((car) => (
            <div key={car.Cid} className="highlighted-card">
              <Cards car={car} getHighlights={getHighlights} />
            </div>
          ))
        ) : (
          <p style={{ color: "#009879", fontSize: "24px" }}>
            No cars highlighted yet!
          </p>
        )}
      </div>
    </div>
  );
}

export default Highlight;
