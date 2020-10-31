import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Event = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 6px;
  top: 5rem;
`;

export const Text = styled.h1`
  position: absolute;
  width: 110px;
  height: 26px;
  left: 150px;
  top: 797px;
  font-family: Cocogoose;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  color: #15054e;
`;

export const EventCardContainer = styled.div`
  position: absolute;
  width: 367px;
  height: 307px;
  left: 150px;
  top: 864px;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(21, 5, 78, 0.2);
  border-radius: 5px;
`;

export const EventCardTitle = styled.title`
  position: absolute;
  width: 367px;
  height: 61px;
  left: 150px;
  top: 864px;
  background-color: #46108a;
  border-radius: 5px 5px 0px 0px;
  font-family: COCOGOOSE;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
`;

export const EventCardDetail = styled.ul`
  position: absolute;
  width: 324px;
  height: 82px;
  left: 49px;
  top: 537px;
  font-family: Typo Grotesk Rounded;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #000000;
`;

export const EventImg = styled.img`
  position: absolute;
  width: 342px;
  height: 0px;
  left: 935px;
  top: 1009px;
  border: 1px solid rgba(21, 5, 78, 0.2);
`;

export const EventCardContent = styled.dl`
  position: absolute;
  width: 324px;
  height: 85px;
  left: 935px;
  top: 1023px;
`;

export const Li = styled.li`
  font-family: Typo Grotesk Rounded;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.08em;
  color: #000000;
`;

export const EventLink = styled(LinkR)`
  position: absolute;
  left: 64.93%;
  right: 29.86%;
  top: 28.27%;
  bottom: 71.02%;
  font-family: Cocogoose;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #c033b6;
`;
