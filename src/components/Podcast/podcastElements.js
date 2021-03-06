import { down } from "styled-breakpoints";
import styled from "styled-components";

export const Podcast = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 85px;
`;

export const PodcastContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  ${down("tablet")} {
    flex-direction: column;
  }
`;

export const PodcastGreeting = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-evenly;
  margin-left: 5rem;

  ${down("tablet")} {
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 40px;

  ${down("tablet")} {
    margin-bottom: 0;
  }
`;

export const Text = styled.span`
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: 250;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.blue};

  ${down("tablet")} {
    margin-bottom: 16px;
  }
`;

export const PodcastMessage = styled.div`
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
  font-weight: normal;
  font-size: 60px;
  line-height: 85px;
  color: ${({ theme }) => theme.colors.pink};

  ${down("tablet")} {
    font-size: 40px;
    line-height: 57px;
  }
`;

export const P = styled.p`
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: 250;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.blue};

  ${down("tablet")} {
    margin: 16px 0;
  }
`;

export const PodcastImage = styled.img`
  max-width: 600px;

  ${down("tablet")} {
    max-height: 346px;
    margin-bottom: 40px;
  }
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${({ primary, theme }) =>
    primary ? theme.colors.violet : theme.colors.white};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.violet};

  display: flex;
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  margin: 1em;
  padding: 12px 35px 20px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  cursor: pointer;
`;
