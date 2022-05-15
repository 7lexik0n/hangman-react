import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Button } from "@mui/material";
import Figure from "./Figure";
import { blueGrey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Header from "./Header";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[500]),
  backgroundColor: blueGrey[500],
  "&:hover": {
    backgroundColor: blueGrey[700],
  },
}));

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "primary.dark",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Container>
        <Grid container justifyContent="center">
          <Figure errors={new Array(6)} />
        </Grid>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <ColorButton
              variant="contained"
              onClick={() => navigate("/game/single")}
            >
              Игра с компьютером
            </ColorButton>
          </Grid>
          <Grid item>
            <ColorButton
              variant="contained"
              onClick={() => navigate("/game/coop")}
            >
              Игра вдвоём
            </ColorButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
