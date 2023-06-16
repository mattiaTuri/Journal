import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { SectionContext } from "../Home";

function Navbar({ currentDate }) {
  const sectionPath = useContext(SectionContext);

  return (
    <nav className="navbar">
      <Box className="date-mobile">
        <Typography
          className="date"
          component="p"
          gutterBottom
        >
          {currentDate}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Article section: <strong>{sectionPath.toUpperCase()}</strong>
        </Typography>
      </Box>

      <NavLink className="nav-link" to="/arts">
        Arts
      </NavLink>
      <NavLink className="nav-link" to="/books">
        Books
      </NavLink>
      <NavLink className="nav-link" to="/science">
        Science
      </NavLink>
      <NavLink className="nav-link" to="/sports">
        Sports
      </NavLink>
      <NavLink className="nav-link" to="/world">
        World
      </NavLink>
    </nav>
  );
}

export default Navbar;
