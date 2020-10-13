import React from "react";
import {
  Home,
  HomeContainer,
  HomeGreeting,
  Title,
  Text,
  H2,
  P,
  HomeMessage,
  Button,
  HomeImage,
  HomeButton
} from './mainElements';
import Girls from "../../Assets/images/girls.png";

const Main = () => {
  return (
    <Home>
      <HomeContainer>
        <HomeGreeting>
          <Title>👋¡Hola! Somos #ReactLadies </Title>
          <Text>
            Somos personas que amamos lo que hacemos, queremos que todos y todas
            formen parte
          </Text>
        </HomeGreeting>
        <HomeMessage>
          <H2>Un espacio para</H2>
          <P>comunicar</P>
        </HomeMessage>
        <HomeImage src={Girls} />
        <HomeButton md="4">
          <Button primary>¡Quiero ser speaker!</Button>
          <Button>Unirme al Discord</Button>
        </HomeButton>
      </HomeContainer>
    </Home>
  );
};

export default Main;
