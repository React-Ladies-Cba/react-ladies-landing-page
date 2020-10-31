
import styled from "styled-components";

export const Home = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 6px;
  top: 2rem;
`;

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 85px;
`;

export const HomeGreeting = styled.div`
  display: flex;
  text-align: left;
  justify-content: end;
  margin-left: 5rem;
`;

export const Title = styled.h1`
  font-family: Cocogoose;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
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
  line-height: 30px;
  color: #15054e;
  position: absolute;
  width: 500px;
  height: 50px;
  left: 170px;
  top: 305px;
`;

export const HomeMessage = styled.div`
  display: flex;
  text-align: left;
  justify-content: end;
  margin-left: 5rem;
`;

export const H2 = styled.h2`
  font-family: Cocogoose;
  font-style: normal;
  font-weight: 250;
  font-size: 38px;
  line-height: 40px;
  color: #15054e;
  position: absolute;
  width: 500px;
  height: 40px;
  left: 172px;
  top: 416px;
`;
export const P = styled.p`
  font-family: Cocogoose;
  font-style: normal;
  font-weight: normal;
  font-size: 63px;
  line-height: 85px;
  color: #c033b6;
  position: absolute;
  width: 369px;
  height: 85px;
  left: 220px;
  top: 470px;
`;

export const HomeImage = styled.img`
  position: absolute;
  width: 600px;
  height: 604px;
  left: 65rem;
  top: 10rem;
`;

export const HomeButton = styled.div`
  position: absolute;
  width: 367px;
  height: 44px;
  left: 200px;
  top: 600px;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#46108A" : "white")};
  color: ${(props) => (props.primary ? "white" : "#46108A")};

  display: flex;
  font-family: Cocogoose;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  margin: 1em;
  padding: 12px 84px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  cursor: pointer;
  width: 367px;
  height: 44px;
  left: 150px;
  top: 646px;
`;

