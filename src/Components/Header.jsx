import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import useAxios from "../Hooks/useAxios";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import header from "../Assets/css/header.css";
import { SectionContext } from "../Home";
import moment from "moment";

function Header() {
  let currentDate = moment().format("LL");
  const sectionPath = useContext(SectionContext)

  const [icon, setIcon] = useState(false);
  const [menu, setMenu] = useState(false);
  const { sections } = useAxios(
    "https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=r2AHYUrfA3Tx5WPFUGltSMqASSPhXY4T"
  );

  const toggleLeftMenu = (open) => (event) => {
    setIcon(!icon);
    setMenu(open);
  };

  return (
    <AppBar className="header" color="" position="static" sx={{ boxShadow: 0 }}>
      <Toolbar
        className="header-container"
        variant="dense"
        sx={{ justifyContent: "center" }}
      >
        <div className="date date-desktop">
          <Typography
            className="date"
            variant="button"
            display="block"
            gutterBottom
          >
            {currentDate}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Article section: <strong>{sectionPath.toUpperCase()}</strong>
          </Typography>
        </div>
        <Link to="/" className="header-title">
          World Journal
        </Link>
        <IconButton className="header-icon" onClick={toggleLeftMenu(true)}>
          {icon ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
      <Navbar currentDate={currentDate}/>
      <Drawer
        anchor={"left"}
        open={menu}
        onClose={toggleLeftMenu(false)}
        sx={{ width: 300 }}
      >
        <Typography variant="h6" component="h6" sx={{ paddingLeft: 2 }}>
          Section List
        </Typography>
        <List>
          {sections.slice(1).map((section, i) => {
            let format = /[ /]/;
            if(format.test(section.section)){
              return
            }else{
              return (
                <ListItem key={i}>
                  <Link className="link" to={`/${section.section}`}>
                    {section.display_name}
                  </Link>
                </ListItem>
              );
            }         
          })}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
