import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

function Error() {
  return (
    <Box className="error">
      <Typography variant="h4" component="h1">
        We are sorry, no article found
      </Typography>
    </Box>
  );
}

export default Error;
