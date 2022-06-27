import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding-bottom: 5px;
  padding: 25px 0 25px 25px;
  border-bottom: 1px solid grey;
`;
export const Link = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: blue;
  margin: 16px;
  transition: all linear 400ms;

  &.active {
    color: red;
    pointer-events: none;
  }
`;
