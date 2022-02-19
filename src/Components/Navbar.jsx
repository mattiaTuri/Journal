import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

function Navbar({ date }) {
  return (
    <nav className="navbar">
      <div className="date-mobile">
        <Typography
          className="date"
          variant="button"
          display="block"
          gutterBottom
        >
          {date}
        </Typography>
        <Typography variant="body2" gutterBottom>
          International news from the world.
        </Typography>
      </div>

      <NavLink className="nav-link" to="/arts">
        Arts
      </NavLink>
      <NavLink className="nav-link" to="/business">
        Business
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
