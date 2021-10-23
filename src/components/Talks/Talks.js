import React from "react";
import {
  Talk,
  TalkContainer,
  TalkGreeting,
  Text,
  TalkMessage,
  H2,
  P,
  TalkImage,
  TalkButton,
} from "../Talks/talksElements";
import { Button, Title } from "../../Pages/globalElements";
import Design from "../../Assets/images/design.png";

const Talks = () => {
  return (
    <>
      <Talk>
        <TalkContainer>
          <TalkGreeting>
            <Title><span role="img" aria-label="emoji">💻 </span>Nuestras charlas </Title>
          </TalkGreeting>
          <TalkMessage>
            <Text>NUESTROS VÍDEOS</Text>
            <H2>¿Te perdiste de alguna charla?</H2>
            <P>
              Ahora los podes ver en nuestro canal de youtube donde quieras y
              cómo quieras.
            </P>
          </TalkMessage>
          <TalkButton md="6">
            <Button primary>Ver lista completa de vídeos</Button>
          </TalkButton>
        </TalkContainer>
        <TalkImage src={Design} />
      </Talk>
    </>
  );
};

export default Talks;
