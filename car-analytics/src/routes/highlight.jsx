import React, { useState, useEffect } from "react";
import "../styles/highlight.css";
import Menu from "../components/menu";
import Cards from "../components/card"; // Ensure the correct path and filename casing

function Highlight() {
  const [highlightedCars, setHighlightedCars] = useState([]);

  const getHighlights = () => {
    const storedHighlights =
      JSON.parse(localStorage.getItem("highlights")) || [];
    setHighlightedCars(storedHighlights);
  };

  // Retrieve favorited cars from local storage when the component mounts
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
              <Cards car={car} />
            </div>
          ))
        ) : (
          <p style={{ color: "#009879", fontSize: "24px" }}>
            No cars highlighted yet!
          </p>
        )}
      </div>
      {/* <div>
        <b style={{fontSize: '24px'}}>Car Cards</b>
        <div></div>
        <div className="card-spacing">
          {currentItems.map((car, index) => (
            <Cards key={index} car={car} />
            ))}
        </div>
        <Pagination 
                currentPage={currentPage}
                totalItems={cars.Cars.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />
      </div> */}
    </div>
  );
}

export default Highlight;
