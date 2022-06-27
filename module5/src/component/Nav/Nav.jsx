import React from "react";
import { Header, Link } from "./Nav.styled";
import { Outlet, useLocation } from "react-router-dom";
const Nav = () => {
  let location = useLocation();
  return (
    <>
      <Header>
        <Link to="/" state={{ from: location }}>
          Home
        </Link>
        <Link to="/movies" state={{ from: location }}>
          Movies
        </Link>
      </Header>

      <Outlet />
    </>
  );
};

export default Nav;
