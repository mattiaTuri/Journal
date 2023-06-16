import React from "react";
import { Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import Box from "@mui/material/Box"

function Footer() {
  return (
    <footer >
      <Box sx={{mt:5, borderTop:1, borderColor:"black"}}>
      <Typography component="span" display="block" sx={{ textAlign: "center" }}>
        World Journal
      </Typography>
      <Typography
        variant="caption"
        component="p"
        display="block"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        © 2022 The world journal company
      </Typography>
      </Box>   
    </footer>
  );
}

export default Footer;
