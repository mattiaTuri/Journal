import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Burger from "./Burger";
import header from "../Assets/css/header.css";

function Header() {
  const [isHamburgerOpen, setHamburger] = useState(false);

  const showSidebar = () => {
    setHamburger(!isHamburgerOpen);
  };

  return (
    <header>
      <section className="header-container">       
        <div className="title">         
          <Link className="nav-link" to="/">
            World Journal
          </Link>
        </div>   
        <Burger isHamburgerOpen={isHamburgerOpen} showSidebar={showSidebar} />      
      </section>
      <Navbar isHamburgerOpen={isHamburgerOpen}/>
    </header>
  );
}

export default Header;
