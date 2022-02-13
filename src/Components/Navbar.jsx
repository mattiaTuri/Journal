import React, { useState } from "react";

import { NavLink } from "react-router-dom";

function Navbar({ isHamburgerOpen, showSidebar }) {
  return (
    <nav
      className={isHamburgerOpen ? "navigation-menu active" : "navigation-menu"}
    >
      <div className="nav-menu-link">
        <NavLink
          className="nav-link"
          activeClassName="active"
          exact
          to="/art"
          onClick={showSidebar}
        >
          Art
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="active"
          to="/business"
          onClick={showSidebar}
        >
          Business
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="active"
          to="/politics"
          onClick={showSidebar}
        >
          Politics
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="active"
          to="/tech"
          onClick={showSidebar}
        >
          Tech
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="active"
          to="/pages"
          onClick={showSidebar}
        >
          World
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
