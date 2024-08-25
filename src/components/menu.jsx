import React from "react";
import "../styles/menu.css";
import images from "../assets/constants/image";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div id="menu-container">
      <div id="menu-mini-container">
        <NavLink to="/">
          <div className="items-container">
            <div>
              <img id="logo-image" src={images.car} alt="Car Logo" />
            </div>
            <div style={{ color: "#009879" }}>Car Analytics</div>
          </div>
        </NavLink>
        <div className="items-container list">
          <div className="list-items">
            <NavLink
              to="/"
              end
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
    </div>
  );
}

export default Menu;
