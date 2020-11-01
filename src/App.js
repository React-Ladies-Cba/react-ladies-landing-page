import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/index";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global/GlobalStyles";
import { MediaContextProvider } from "./styles/media";

function App() {
  return (
    <MediaContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Home />
        </Router>
      </ThemeProvider>
    </MediaContextProvider>
  );
}

export default App;
