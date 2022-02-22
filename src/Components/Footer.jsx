import React from "react";
import footer from "../Assets/css/footer.css";

import { Typography } from "@mui/material";
import { textAlign } from "@mui/system";

function Footer() {
  return (
    <footer>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        World Journal
      </Typography>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        © 2022 The world journal company
      </Typography>
    </footer>
  );
}

export default Footer;
