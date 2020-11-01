import React from "react";
import {
  Home,
  HomeContainer,
  HomeGreeting,
  Title,
  Text,
  H2,
  P,
  HomeImage,
} from "./mainElements";
import { Button } from "../../Pages/globalElements";
import Girls from "../../Assets/images/girls.png";

const Main = () => {
  return (
    <Home>
      <HomeContainer>
        <HomeGreeting>
          <div>
            <Title>👋¡Hola! Somos #ReactLadies </Title>
            <Text>
              Somos personas que amamos lo que hacemos, queremos que todos y
              todas formen parte
            </Text>
          </div>
          <div>
            <H2>Un espacio para</H2>
            <P>comunicar</P>
          </div>
          <div>
            <Button primary>¡Quiero ser speaker!</Button>
            <Button>Unirme al Discord</Button>
          </div>
        </HomeGreeting>
        <HomeImage src={Girls} />
      </HomeContainer>
    </Home>
  );
};

export default Main;
