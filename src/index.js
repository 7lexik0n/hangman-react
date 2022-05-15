import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";
import Home from "./components/Home";
import "./App.sass";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Root = () => (
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="game">
            <Route index element={<App />} />
            <Route path="single" element={<App />} />
            <Route path="coop" element={<App players={2} />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
