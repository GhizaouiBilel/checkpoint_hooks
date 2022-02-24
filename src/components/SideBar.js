import React from "react";
import "./Header.css";
const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <a href="#home">
          <i class="left-menu-icon fas fa-home"></i>
        </a>

        <a href="#search">
          <label >
            <i class="left-menu-icon fas fa-search"></i>
          </label>
          <input type="checkbox" id="mycheckbox" />
        </a>

        <a href="#watched">
          <i class="left-menu-icon fas fa-tv"></i>
        </a>
        <a href="#bookmarked">
          <i class="left-menu-icon fas fa-bookmark"></i>
        </a>
        <a href="#Cart">
          <i class="left-menu-icon fas fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
