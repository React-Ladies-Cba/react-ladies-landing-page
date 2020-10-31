
import React from "react";
import { Line } from "../../Assets/images/Line.svg";
import {
  Event,
  Text,
  EventCardContainer,
  EventCardDetail,
  EventImg,
  EventCardContent,
  Li,
  EventLink,
  EventTopBar,
  Title,
  TextBox,
  TextImage,
  TextDetail
} from "./eventsElements";

const Events = () => {
  return (
    <fragment>
      <Event>
        <Text>📅 Eventos</Text>
        <EventCardContainer>
          <EventTopBar>
            <Title>Workshop React</Title>
          </EventTopBar>
          <EventCardDetail>
            📅 15/08/20 🕒 19:00hs 😀 Mentora: Carolina Bustos
          </EventCardDetail>
          <EventImg src={Line} alt={Line} />
          <EventCardContent>
            <Li>CSS</Li>
            <Li>Componente Globo</Li>
            <Li>Reutilización de un componente</Li>
            <Li>Binding de datos</Li>
            <Li>Renders condicionales</Li>
          </EventCardContent>
          <EventLink>Leer más</EventLink>
        </EventCardContainer>
        <TextBox>
          <TextImage>👏</TextImage>
          <TextDetail>¡No te los pierdas!
</TextDetail>
        </TextBox>
      </Event>
    </fragment>
  );
};

export default Events;

