import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => `${theme.colors.pink} 14.17%,
    ${theme.colors.violet} 86.04%`}
  );
  display: flex;
`;

export const CentralLine = styled.h3`
  color: white;
  font-family: Cocogoose, sans-serif;
  font-style: normal;
  font-weight: 250;
  font-size: 18px;
  line-height: 24px;
`;
