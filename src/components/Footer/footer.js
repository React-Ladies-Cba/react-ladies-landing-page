import React from "react";
import { Container, CentralLine } from "./footerElements";

const Footer = () => {
  return (
    <>
      <Container>
        <CentralLine>
          Hecho con <span role="img" aria-label="emoji">💛</span> por React Ladies
        </CentralLine>
      </Container>
    </>
  );
};

export default Footer;
