import { down } from "styled-breakpoints";
import styled from "styled-components";

export const Talk = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 85px;

  ${down("tablet")} {
    flex-direction: column;
  }
`;

export const TalkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  min-height: 100%;
`;

export const TalkGreeting = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
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

export const TalkMessage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: end;
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
  color: ${({ theme }) => theme.colors.blue};

  ${down("tablet")} {
    margin: 16px 0;
  }
`;

export const TalkImage = styled.img`
  max-width: 600px;
  max-height: 604px;

  ${down("tablet")} {
    max-height: 346px;
  }
`;

export const TalkButton = styled.div`
  width: 367px;
  height: 44px;

  ${down("tablet")} {
    width: 100%;
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
