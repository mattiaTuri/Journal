import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Burger({ isHamburgerOpen, showSidebar }) {
  return (
    <div className="hamburger" onClick={showSidebar}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        {isHamburgerOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
}

export default Burger;
