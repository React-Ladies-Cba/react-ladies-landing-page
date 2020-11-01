import { css } from "styled-components";

export default css`
  @font-face {
    font-family: Cocogoose, sans-serif;
    font-style: normal;
    font-weight: 100;
    src: local("Cocogoose"),
      url(../../Assets/fonts/cocogoose.ttf) format("TrueType");
  }

  * {
    margin: 0;
    padding: 0;
    font-family: "Cocogoose", "Typo Grotesk", sans-serif;
  }

  html,
  body {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }
`;
