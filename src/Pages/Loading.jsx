import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  return (
    <Box className="spinner">
      <CircularProgress />
    </Box>
  );
}

export default Loading;
