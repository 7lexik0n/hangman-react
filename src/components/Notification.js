import React from "react";
import { Typography, Paper } from "@mui/material";

const Notification = () => {
  return (
    <div className="notification">
      <Paper sx={{ padding: "10px 12px", backgroundColor: "warning.dark" }}>
        <Typography>Эта буква уже называлась!</Typography>
      </Paper>
    </div>
  );
};

export default Notification;
