import { css } from "styled-components";
import Cocogoose from "../../Assets/fonts/cocogoose.ttf";
import CocogooseLight from "../../Assets/fonts/cocogoose-light.ttf";
import TypoGrotesk from "../../Assets/fonts/Typo-Grotesk-Rounded-Demo.otf";

export default css`
  @font-face {
    font-family: Cocogoose;
    font-style: normal;
    font-weight: 400;
    src: local("Cocogoose"), url(${Cocogoose}) format("TrueType");
  }

  @font-face {
    font-family: Cocogoose;
    font-style: normal;
    font-weight: 100;
    src: local("Cocogoose"), url(${CocogooseLight}) format("TrueType");
  }

  @font-face {
    font-family: Typo Grotesk Rounded;
    font-style: normal;
    font-weight: 100;
    src: local("Typo Grotesk Rounded"), url(${TypoGrotesk}) format("opentype");
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }
`;
