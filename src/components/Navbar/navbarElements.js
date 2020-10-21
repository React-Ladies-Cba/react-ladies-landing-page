import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: linear-gradient(90deg, #c033b6 14.17%, #46108a 86.04%);
  height: 65px;
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
  displey: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  position: absolute;
  width: 152px;
  height: 46px;
  left: 200px;
  top: 10px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  justify-content: end;
  margin-left: 40rem;

`;

export const NavItem = styled.li`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1.8rem 3rem;
  height: 100%;
`;

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #c033b6;
  }
`;
