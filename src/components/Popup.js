import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const Popup = ({ open, closeDialog, repeatGame, gameResult, word }) => {
  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {gameResult === "win" ? `Победа!` : `Поражение!`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {gameResult === "win"
            ? `Поздравляем! Вы успешно отгадали слово!`
            : `Увы! Загаданное слово - ${word}. Повезёт в следующий раз!`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Отмена</Button>
        <Button onClick={repeatGame}>Повторить!</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
