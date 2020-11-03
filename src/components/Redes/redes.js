import React from "react";
import { Title } from "../Main/mainElements";
import { Container, ContainerIcons, Images } from "./redesElements";
import twImage from "../../Assets/images/Redes/twitter.png";
import igImage from "../../Assets/images/Redes/instagram.png";
import twtImage from "../../Assets/images/Redes/twitch.png";
import linkeImage from "../../Assets/images/Redes/linkedin.png";

const Redes = () => {
  return (
    <>
      <Container>
        <Title>¡Seguinos en nuestras redes!</Title>
        <ContainerIcons>
          <a
            href="https://twitter.com/reactladiescba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Images src={twImage} />
          </a>
          <a
            href="https://www.instagram.com/reactladies.cba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Images src={igImage} />
          </a>
          <a
            href="https://www.twitch.tv/search?term=reactladiescba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Images src={twtImage} />
          </a>
          <a
            href="https://www.linkedin.com/company/react-ladies-cba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Images src={linkeImage} />
          </a>
        </ContainerIcons>
      </Container>
    </>
  );
};

export default Redes;
