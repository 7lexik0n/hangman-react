import React, { useState, useEffect } from "react";
import {
  Modal,
  Paper,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  padding: "20px 15px",
};

const WordForm = ({ open, onSubmit }) => {
  const [touched, setTouched] = useState(false);
  const [word, setWord] = useState(``);
  const [error, setError] = useState(null);

  const checkValue = () => {
    if (word.trim() === `` || word.trim().match(/[^а-яА-Я]/)) {
      setError(`Некорректное значение!`);
    } else {
      setError(null);
    }
  };

  const onClickHandler = () => {
    if (error || !touched) {
      return;
    }

    onSubmit(word);
    setWord(``);
  };

  const changeValue = (event) => {
    setWord(event.target.value);
    setTouched(true);
  };

  useEffect(() => {
    if (touched) {
      checkValue();
    }
  }, [word, touched]);

  return (
    <div className="form__container">
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Введите слово
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ведущий, введите новое слово
          </Typography>
          <Box sx={{ my: "10px" }}>
            <TextField
              autoFocus
              error={!!error}
              fullWidth
              label="Слово"
              helperText={error}
              value={word}
              onChange={changeValue}
            />
          </Box>
          <Button onClick={onClickHandler}>Подтвердить</Button>
        </Paper>
      </Modal>
    </div>
  );
};

export default WordForm;
