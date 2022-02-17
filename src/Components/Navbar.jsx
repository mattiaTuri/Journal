import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import Pages from "../Pages/Pages";

function Navbar({ isHamburgerOpen }) {
  const [sections, setSectionArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T"
      )
      .then((res) => {
        setSectionArticles(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <nav className="navbar-desktop">
        <NavLink className="nav-link" to="/Arts">
          Arts
        </NavLink>
        <NavLink className="nav-link" to="/Business">
          Business
        </NavLink>
        <NavLink className="nav-link" to="/Sports">
          Sports
        </NavLink>
        <NavLink className="nav-link" to="/Tech">
          Tech
        </NavLink>
        <NavLink className="nav-link" to="/World">
          World
        </NavLink>
      </nav>
      <div
        className={
          isHamburgerOpen
            ? "navigation-menu-left active"
            : "navigation-menu-left"
        }
      >
        <h3>Sections</h3>
        <div className="nav-menu-link">
          {sections.slice(1).map((section) => {
            return (
              <Link
                key={section.section}
                className="nav-link"
                to={`/${section.display_name}`}
              >
                {section.display_name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
