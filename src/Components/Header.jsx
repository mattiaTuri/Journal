import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import useFetch from "../Hooks/useFetch";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Typography from '@mui/material/Typography';
import header from "../Assets/css/header.css"

function Header() {
  const [icon, setIcon] = useState(false);
  const [menu, setMenu] = useState(false)
  const {sections} = useFetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T");

  const toggleLeftMenu = (open) => (event) => {
    setIcon(!icon)
    setMenu(open)
  }

  return (
      <AppBar className="header" color="" position="static" sx={{ boxShadow: 0 }}>
        <Toolbar className="header-container" variant="dense" sx={{justifyContent:"center"}}>
          <Typography className="header-title" variant="h1">World Journal</Typography>
          <IconButton className="header-icon" onClick={toggleLeftMenu(true)}>
            {icon ? <CloseIcon/> : <MenuIcon />}
          </IconButton>
        </Toolbar>
        <Navbar/>
        <Drawer anchor={"left"} open={menu} onClose={toggleLeftMenu(false)} sx={{width:300}}>
          {sections.map(section => {
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
        </Drawer>
      </AppBar>
  );
}

export default Header;
