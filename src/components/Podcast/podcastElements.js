import styled from "styled-components";

export const Podcast = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 6px;
  top: 125rem;
`;

export const PodcastContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 85px;
`;

export const PodcastGreeting = styled.div`
  display: flex;
  text-align: left;
  justify-content: end;
  margin-left: 5rem;
`;

export const Title = styled.h1`
  font-family: Cocogoose;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  color: #15054e;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 170px;
  top: 247px;
`;

export const Text = styled.text`
  font-family: Cocogoose;
  font-style: normal;
  font-weight: 250;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.15em;
  color: #15054e;
  position: absolute;
  width: 500px;
  height: 50px;
  left: 1250px;
  top: 305px;
`;

export const PodcastMessage = styled.div`
  display: flex;
  text-align: left;
  justify-content: end;
  margin-left: 5rem;
`;

export const H2 = styled.h2`
  font-family: Cocogoose;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 85px;
  color: #c033b6;
  position: absolute;
  width: 500px;
  height: 40px;
  left: 172px;
  top: 350px;
`;
export const P = styled.p`
  font-family: Cocogoose;
  font-style: normal;
  font-weight: 250;
  font-size: 16px;
  line-height: 22px;
  color: #15054e;
  position: absolute;
  width: 369px;
  height: 85px;
  left: 180px;
  top: 610px;
`;

export const PodcastImage = styled.img`
  position: absolute;
  width: 600px;
  height: 604px;
  left: 65rem;
  top: 12rem;
`;

export const PodcastButton = styled.div`
  position: absolute;
  width: 367px;
  height: 44px;
  left: 150px;
  top: 700px;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#46108A" : "white")};
  color: ${(props) => (props.primary ? "white" : "#46108A")};

  display: flex;
  font-family: Cocogoose;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  margin: 1em;
  padding: 12px 35px 20px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  cursor: pointer;
  width: 370px;
  height: 48px;
  left: 120px;
  top: 646px;
`;
