import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { down } from 'styled-breakpoints';

export const Nav = styled.nav`
  background: linear-gradient(
    90deg,
    ${({ theme }) => `${theme.colors.pink} 14.17%,
    ${theme.colors.violet} 86.04%`}
  );
  height: 65px;
  font-family: Cocogoose, sans-serif;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  front-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 1200px;

  ${down('tablet')} {
    justify-content: center;
  }
`;

export const NavLogo = styled(LinkR)`
  width: 152px;
  height: 46px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
`;

export const NavLink = styled(LinkS)`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.pink};
  }
  &:hover {
    opacity: 0.5;
  }
`;
