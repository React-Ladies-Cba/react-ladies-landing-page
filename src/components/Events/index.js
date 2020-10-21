import React from "react";
import { Line } from "../../Assets/images/Line.svg";
import {
  Event,
  Text,
  EventCardContainer,
  EventCardTitle,
  EventCardDetail,
  EventImg,
  EventCardContent,
  Li,
  EventLink,
} from "./eventsElements";

const Events = () => {
  return (
    <fragment>
      <Event>
        <Text>📅 Eventos</Text>
        <EventCardContainer>
          <EventCardTitle>Workshop React</EventCardTitle>
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
      </Event>
    </fragment>
  );
};

export default Events;
