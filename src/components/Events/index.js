import React from "react";
import {
  Event,
  EventsWrapper,
  Text,
  TextBox,
  TextImage,
  TextDetail,
} from "./eventsElements";
import EventItem from "./EventItem";

const Events = () => {
  return (
    <>
      <Event>
        <Text>📅 Eventos</Text>
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
