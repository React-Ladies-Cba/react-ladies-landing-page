import React from "react";
import {
  EventCardContainer,
  EventCardDetail,
  Line,
  EventCardContent,
  Li,
  EventLink,
  EventTopBar,
  Title,
} from "./eventsElements";

const EventItem = () => (
  <EventCardContainer>
    <EventTopBar>
      <Title>Workshop React</Title>
    </EventTopBar>
    <EventCardDetail>
      <li>📅 15/08/20</li>
      <li>🕒 19:00hs</li>
      <li>😀 Mentora: Maria Ocampo</li>
    </EventCardDetail>
    <Line />
    <EventCardContent>
      <Li> - CSS</Li>
      <Li> - Componente Globo</Li>
      <Li> - Reutilización de un componente</Li>
      <Li> - Binding de datos</Li>
      <Li> - Renders condicionales</Li>
    </EventCardContent>
    <EventLink>Leer más</EventLink>
  </EventCardContainer>
);

export default EventItem;
