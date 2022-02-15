import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Navbar({ isHamburgerOpen }) {

  const [sections, setSectionArticles] = useState([])

  useEffect(() => {
    axios.get("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T")
      .then(res =>{     
        setSectionArticles(res.data.results)   
      })
      .catch(error => {
        console.log(error)
      })
  },[]);

  return (
    
    <nav
      className={isHamburgerOpen ? "navigation-menu active" : "navigation-menu"}
    >
      <h3>Sections</h3>
      <div className="nav-menu-link">

        {sections.slice(1).map(section => {
          return <NavLink key={section.section}
          className="nav-link"
          to="/art"
        >{section.display_name}</NavLink>
        })}
      </div>
    </nav>
  );
}

export default Navbar;
