import styled from "styled-components";
import { down } from "styled-breakpoints";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 90px;
`;

export const ContainerIcons = styled.div`
  width: 40%;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${down("tablet")} {
    justify-content: space-around;
    width: 70%;
  }
`;

export const Title = styled.h1`
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.blue};
`;

export const Images = styled.img`
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  height: 35px;
  width: 35px;
`;
