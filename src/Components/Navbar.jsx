import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/pages">Art</Link>
      <Link to="/pages">Business</Link>
      <Link to="/pages">Politics</Link>
      <Link to="/pages">Tech</Link>
      <Link to="/pages">World</Link>
    </nav>
  );
}

export default Navbar;
