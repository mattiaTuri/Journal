import { Link, NavLink } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

function Navbar({ isHamburgerOpen }) {
  const { sections } = useFetch(
    "https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T"
  );

  return (
    <>
      <nav className="navbar-desktop">
        <NavLink className="nav-link" to="/arts">
          Arts
        </NavLink>
        <NavLink className="nav-link" to="/business">
          Business
        </NavLink>
        <NavLink className="nav-link" to="/sports">
          Sports
        </NavLink>
        <NavLink className="nav-link" to="/tech">
          Tech
        </NavLink>
        <NavLink className="nav-link" to="/world">
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
                to={`/${section.section}`}
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
