import React from "react";
import {
  Talk,
  TalkContainer,
  TalkGreeting,
  Title,
  Text,
  TalkMessage,
  H2,
  P,
  TalkImage,
  TalkButton,
  Button,
} from "../Talks/talksElements";
import Design from "../../Assets/images/design.png";


const Talks = () => {
  return (
    <fragment>
      <Talk>
        <TalkContainer>
          <TalkGreeting>
            <Title>💻 Nuestras charlas </Title>
            <Text>NUESTROS VÍDEOS</Text>
          </TalkGreeting>
          <TalkMessage>
            <H2>¿Te perdiste de alguna charla?</H2>
            <P>Ahora los podes ver en nuestro canal de youtube donde quieras y
              cómo quieras.
            </P>
          </TalkMessage>
          <TalkImage src={Design} />
          <TalkButton md="6">
            <Button primary>Ver lista completa de vídeos</Button>
          </TalkButton>
        </TalkContainer>
      </Talk>
    </fragment>
  );
};

export default Talks;
