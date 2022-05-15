import React from "react";
import { Typography, Paper, Grid } from "@mui/material";

const Errors = ({ errors }) => {
  return (
    <div className="errors__container">
      <Paper elevation={5} sx={{ py: "5px" }}>
        <Typography variant="h4" component="div" align="center">
          Ошибки
        </Typography>
      </Paper>
      <Grid container justifyContent="center" sx={{ mt: "10px" }} spacing={1}>
        {errors.map((error, index) => (
          <Grid item key={index}>
            <Paper
              sx={{ padding: "10px 12px", backgroundColor: "error.dark" }}
              elevation={10}
            >
              <Typography variant="h4">{error}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Errors;
