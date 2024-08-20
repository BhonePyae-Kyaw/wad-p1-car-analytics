import React from "react";
import "../styles/menu.css";
import images from "../assets/constants/image";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div id="menu-container">
      <NavLink to="/">
        <div className="items-container">
          <div>
            <img id="logo-image" src={images.car} alt="Car Logo" />
          </div>
          <div>Car Analytics</div>
        </div>
      </NavLink>
      <div className="items-container list">
        <div className="list-items">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </div>
        <div className="list-items">
          <NavLink
            to="/highlight"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Highlight
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Menu;
