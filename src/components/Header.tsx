import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        height: 288,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Segoe UI",
          fontWeight: 900,
          color: "#202329",
        }}
      >
        The Rick and Morty API
      </Typography>
    </Box>
  );
};

export default Header;
