import React from "react";
import {
  Podcast,
  PodcastContainer,
  PodcastGreeting,
  Title,
  Text,
  PodcastMessage,
  H2,
  P,
  PodcastImage,
  PodcastButton,
  Button,
} from "../Podcast/podcastElements.js";
import Audio from "../../Assets/images/podcast.png";

const Podcasts = () => {
  return (
    <>
      <Podcast>
        <PodcastContainer>
          <PodcastGreeting>
            <Title> 🎙️ Podcast </Title>
            <Text>PRESENTAMOS</Text>
          </PodcastGreeting>
          <PodcastMessage>
            <H2>Podcast de React Ladies</H2>
            <P>
              Todas las semanas sacamos un nuevo episodio de todos los temas que
              te podés imaginar del mundo IT.
            </P>
          </PodcastMessage>
          <PodcastImage src={Audio} />
          <PodcastButton md="6">
            <Button primary>Escuchar podcast</Button>
            <Button>Proponer un tema</Button>
          </PodcastButton>
        </PodcastContainer>
      </Podcast>
    </>
  );
};

export default Podcasts;
