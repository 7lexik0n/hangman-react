import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import Header from "./components/Header";
import Figure from "./components/Figure";
import Errors from "./components/Errors";
import Corrects from "./components/Corrects";

import { generateWord } from "./functions/functions";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import WordForm from "./components/WordForm";

const App = ({ players = 1 }) => {
  const [playable, setPlayable] = useState(players === 1);
  const [result, setResult] = useState(null);
  const [word, setWord] = useState(generateWord());
  const [errors, setErrors] = useState([]);
  const [corrects, setCorrects] = useState([]);
  const [repeatMessage, setRepeatMessage] = useState(false);
  const [popup, setPopup] = useState(false);
  const [prepare, setPrepare] = useState(players === 2);

  const keyHandler = (evt) => {
    if (!playable) {
      return;
    }

    if (evt.keyCode >= 1072 && evt.keyCode <= 1105) {
      const key = evt.key;

      if (word.toLowerCase().includes(key)) {
        if (!corrects.includes(key)) {
          setCorrects((prevState) => [...prevState, key]);
        } else {
          showRepeatMessage();
        }
      } else {
        if (!errors.includes(key)) {
          setErrors((prevState) => [...prevState, key]);
        } else {
          showRepeatMessage();
        }
      }
    }
  };

  const showRepeatMessage = () => {
    setRepeatMessage(true);
    setTimeout(() => {
      setRepeatMessage(false);
    }, 1500);
  };

  const closeDialog = () => {
    setPopup(false);
  };

  const showWordForm = () => {
    setPopup(false);
    setPrepare(true);
  };

  const checkResult = () => {
    if (errors.length >= 6) {
      setPlayable(false);
      setResult("loose");
      setPopup(true);
      return;
    }

    const result = word
      .toLowerCase()
      .split("")
      .every((letter) => corrects.includes(letter));
    if (result) {
      setPlayable(false);
      setResult("win");
      setPopup(true);
    }
  };

  const repeatGame = () => {
    setPlayable(true);
    setResult(null);
    setErrors([]);
    setCorrects([]);
    setWord(generateWord());
  };

  const setGame = (newWord) => {
    setPrepare(false);
    setPlayable(true);
    setResult(null);
    setErrors([]);
    setCorrects([]);
    setWord(newWord);
  };

  useEffect(() => {
    window.addEventListener("keypress", keyHandler);
    return () => {
      window.removeEventListener("keypress", keyHandler);
    };
  }, [word, errors, corrects, playable]);

  useEffect(() => {
    checkResult();
  }, [errors, corrects]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "primary.dark",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Header />
      <Container maxWidth="lg" sx={{ pt: "100px" }}>
        <Grid container>
          <Grid item xs={8}>
            <Figure errors={errors} />
          </Grid>
          <Grid item xs={4}>
            <Errors errors={errors} />
          </Grid>
        </Grid>
        <Corrects corrects={corrects} word={word} />
        {!playable && (
          <Grid container justifyContent="center">
            <Button
              onClick={players === 1 ? repeatGame : showWordForm}
              variant="contained"
              size="large"
              sx={{ mt: "25px" }}
            >
              Повторить
            </Button>
          </Grid>
        )}
      </Container>
      {repeatMessage && <Notification />}
      {!playable && popup && (
        <Popup
          open={popup}
          closeDialog={closeDialog}
          repeatGame={players === 1 ? repeatGame : showWordForm}
          gameResult={result}
          word={word}
        />
      )}
      {prepare && <WordForm open={prepare} onSubmit={setGame} />}
    </Box>
  );
};

export default App;
