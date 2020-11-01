import styled from "styled-components";

export const Grid = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${({ primary, theme }) =>
    primary ? theme.colors.violet : theme.colors.white};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.violet};

  font-family: Cocogoose, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  margin-bottom: 1rem;
  width: 367px;
  height: 45px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 0;
  cursor: pointer;
`;
