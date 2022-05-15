import React from "react";
import { Typography, Paper, Grid } from "@mui/material";

const Corrects = ({ word, corrects }) => {
  return (
    <div className="corrects__container">
      <Grid container justifyContent="center" spacing={1}>
        {word
          .toLowerCase()
          .split("")
          .map((letter, index) => {
            return (
              <Grid item key={index}>
                <Paper
                  elevation={10}
                  sx={{
                    padding: "10px 12px",
                    width: "50px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4" align="center">
                    {corrects.includes(letter) ? letter : ``}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Corrects;
