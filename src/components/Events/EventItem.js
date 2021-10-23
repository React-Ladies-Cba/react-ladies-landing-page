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
      <li>
        {" "}
        <span role="img" aria-label="emoji">
          📅{" "}
        </span>
        15/08/20
      </li>
      <li>
        <span role="img" aria-label="emoji">
          🕒{" "}
        </span>
        19:00hs
      </li>
      <li>
        <span role="img" aria-label="emoji">
          😀{" "}
        </span>{" "}
        Mentora: Maria Ocampo
      </li>
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
