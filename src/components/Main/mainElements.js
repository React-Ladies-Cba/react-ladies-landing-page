import { down } from "styled-breakpoints";
import styled from "styled-components";

export const Home = styled.div`
  width: 100%;
  height: 100%;
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 64px;

  ${down("tablet")} {
    flex-direction: column;
  }
`;

export const HomeGreeting = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-evenly;
`;

export const GreetingWrapper = styled.div`
  ${down("tablet")} {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h1`
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 26px;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.blue};

  ${down("tablet")} {
    margin: 0;
  }
`;

export const Text = styled.span`
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: 250;
  font-size: 18px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.blue};
`;

export const HomeMessage = styled.div`
  display: flex;
  text-align: left;
  justify-content: end;
  margin-left: 5rem;

  ${down("tablet")} {
    margin: 0;
  }
`;

export const H2 = styled.h2`
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: 250;
  margin-bottom: 8px;
  font-size: 38px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.blue};

  ${down("tablet")} {
    line-height: normal;
    margin-bottom: 0;
    font-size: 20px;
  }
`;
export const P = styled.p`
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 63px;
  line-height: 85px;
  color: ${({ theme }) => theme.colors.pink};

  ${down("tablet")} {
    font-size: 40px;
    line-height: normal;
    margin-bottom: 24px;
  }
`;

export const HomeImage = styled.img`
  max-width: 600px;
  max-height: 604px;

  ${down("tablet")} {
    max-height: 346px;
  }
`;
