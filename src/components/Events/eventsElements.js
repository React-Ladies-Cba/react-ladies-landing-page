import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Event = styled.div`
  width: 100%;
  height: 100%;
`;

export const Text = styled.h1`
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.blue};
`;

export const EventCardContainer = styled.div`
  width: 367px;
  height: 307px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 4px 10px rgba(21, 5, 78, 0.2);
  border-radius: 5px;
`;

export const EventCardTitle = styled.title`
  width: 367px;
  height: 61px;
  background-color: ${({ theme }) => theme.colors.violet};
  border-radius: 5px 5px 0px 0px;
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white};
`;

export const EventCardDetail = styled.ul`
  width: 324px;
  font-family: Typo Grotesk Rounded, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.black};
  list-style: none;
  padding: 1rem;
`;

export const EventImg = styled.img`
  width: 342px;
  height: 0px;
  border: 1px solid rgba(21, 5, 78, 0.2);
`;

export const EventCardContent = styled.dl`
  width: 324px;
  padding: 1rem;
  list-style: none;
`;

export const Li = styled.li`
  font-family: Typo Grotesk Rounded, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.black};
`;

export const EventLink = styled(LinkR)`
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  padding: 0 1rem;
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.pink};
`;

export const EventTopBar = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.violet};
  border-radius: 5px 5px 0px 0px;
`;

export const EventsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  font-size: 1.125rem;
`;

export const TextDetail = styled.span`
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: ${({ theme }) => theme.colors.blue};
`;

export const TextImage = styled.image`
  font-size: 30px;
`;

export const Title = styled.h3`
  width: 168px;
  height: 18px;
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Line = styled.hr`
  margin: 0 1rem;
`;
