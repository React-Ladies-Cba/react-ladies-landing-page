import React from "react";
import {
  Event,
  EventsWrapper,
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
        <Title><span role="img" aria-label="emoji">📅 </span>Eventos</Title>
        <EventsWrapper>
          <EventItem />
          <EventItem />
          <EventItem />
        </EventsWrapper>
        <TextBox>
          <TextImage><span role="img" aria-label="emoji">👏</span></TextImage>
          <TextDetail>¡No te los pierdas!</TextDetail>
        </TextBox>
      </Event>
    </>
  );
};

export default Events;
