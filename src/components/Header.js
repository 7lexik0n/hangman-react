import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="absolute">
      <Toolbar>
        {location.pathname !== "/" && (
          <ArrowBackIcon sx={{ mr: "10px" }} onClick={() => navigate("/")} />
        )}
        <Typography variant="h5" component="h1">
          Висельник
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
