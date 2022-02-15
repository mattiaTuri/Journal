import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Burger({ isHamburgerOpen, showSidebar }) {
  return (
    <div className="hamburger" onClick={showSidebar}>
      <IconButton color="inherit">
        {isHamburgerOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
}

export default Burger;
