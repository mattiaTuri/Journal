import React, { useState } from "react";

import { NavLink } from "react-router-dom";

function Navbar({ isHamburgerOpen }) {
  return (
    <nav
      className={isHamburgerOpen ? "navigation-menu active" : "navigation-menu"}
    >
      <div className="nav-menu-link">
        <NavLink className="nav-link" to="/pages">
          Art
        </NavLink>
        <NavLink className="nav-link" to="/pages">
          Business
        </NavLink>
        <NavLink className="nav-link" to="/pages">
          Politics
        </NavLink>
        <NavLink className="nav-link" to="/pages">
          Tech
        </NavLink>
        <NavLink className="nav-link" to="/pages">
          World
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
