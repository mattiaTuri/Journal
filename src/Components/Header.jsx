import React, { useState } from "react";
import Navbar from "./Navbar";
import Burger from "./Burger";

function Header() {
  const [isHamburgerOpen, setHamburger] = useState(false);

  const showSidebar = () => {
    setHamburger(!isHamburgerOpen);
  };

  return (
    <header>
      <section class="header-container">
        <Burger isHamburgerOpen={isHamburgerOpen} showSidebar={showSidebar} />
        <div className="title">
          <h1>World Journal</h1>
        </div>
      </section>
      <Navbar isHamburgerOpen={isHamburgerOpen} />
    </header>
  );
}

export default Header;
