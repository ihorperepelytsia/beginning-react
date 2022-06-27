import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: blue;
  margin: 16px;
  transition: all linear 400ms;

  &.active {
    color: red;
    pointer-events: none;
  }
`;
export const MovieDetails = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: 2px solid grey;
`;
export const Description = styled.div`
  margin-left: 25px;
`;
export const ListGenres = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  li {
    margin: 0 15px;
  }
`;

export const Information = styled.div`
  margin-left: 25px;
`;
