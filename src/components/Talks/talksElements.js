import styled from "styled-components";

export const Talk = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 6px;
  top: 80rem;
`;

export const TalkContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 85px;
`;

export const TalkGreeting = styled.div`
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
  color: ${({ theme }) => theme.colors.blue};
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
  color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  width: 500px;
  height: 50px;
  left: 170px;
  top: 305px;
`;

export const TalkMessage = styled.div`
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
  color: ${({ theme }) => theme.colors.pink};
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
  color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  width: 369px;
  height: 85px;
  left: 180px;
  top: 610px;
`;

export const TalkImage = styled.img`
  position: absolute;
  width: 600px;
  height: 604px;
  left: 65rem;
  top: 12rem;
`;

export const TalkButton = styled.div`
  position: absolute;
  width: 367px;
  height: 44px;
  left: 150px;
  top: 700px;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${({ primary, theme }) =>
    primary ? theme.colors.violet : theme.colors.white};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.violet};

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
