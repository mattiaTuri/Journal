import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar">
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
