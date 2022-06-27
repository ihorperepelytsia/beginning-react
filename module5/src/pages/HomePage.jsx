import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const HomePage = ({ trending }) => {
  let location = useLocation();
  return (
    <>
      {trending.length > 0 && (
        <ul>
          {trending.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
HomePage.propTypes = {
  trending: PropTypes.array.isRequired,
};
export default HomePage;
