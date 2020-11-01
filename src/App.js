import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/index";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Home />
      </Router>
    </ThemeProvider>
  );
}

export default App;
