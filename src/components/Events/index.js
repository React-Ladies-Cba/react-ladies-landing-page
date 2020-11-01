import React from "react";
import {
  Event,
  EventsWrapper,
  Text,
  TextBox,
  TextImage,
  TextDetail,
} from "./eventsElements";
import { Title } from "../../Pages/globalElements";
import EventItem from "./EventItem";

const Events = () => {
  return (
    <>
      <Event>
        <Title>📅 Eventos</Title>
        <EventsWrapper>
          <EventItem />
          <EventItem />
          <EventItem />
        </EventsWrapper>
        <TextBox>
          <TextImage>👏</TextImage>
          <TextDetail>¡No te los pierdas!</TextDetail>
        </TextBox>
      </Event>
    </>
  );
};

export default Events;
