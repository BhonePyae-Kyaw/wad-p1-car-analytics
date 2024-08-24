import React, { useState, useEffect } from "react";
import "../styles/highlight.css";
import Menu from "../components/menu";
import Cards from "../components/card"; // Ensure the correct path and filename casing

function Highlight() {



  const [highlightedCars, setHighlightedCars] = useState([]);

  // Retrieve favorited cars from local storage when the component mounts
  useEffect(() => {
    const storedHighlights = JSON.parse(localStorage.getItem('highlights')) || [];
    setHighlightedCars(storedHighlights);
  }, []);

  // Handle removal of a car from the highlights
  const removeHighlight = (Cid) => {
    const updatedHighlights = highlightedCars.filter(car => car.Cid !== Cid);
    setHighlightedCars(updatedHighlights);
    localStorage.setItem('highlights', JSON.stringify(updatedHighlights));
  };

  return (
    <div id="highlight">
      <Menu />
      <div className="highlight-content">
        {highlightedCars.length > 0 ? (
          highlightedCars.map(car => (
            <div key={car.Cid} className="highlighted-card">
              <Cards car={car} />
              <button
                className="remove-button"
                onClick={() => removeHighlight(car.Cid)}
                title="Remove from highlights"
              >
                &times;
              </button>
            </div>
          ))
        ) : (
          <p>No cars highlighted yet!</p>
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
