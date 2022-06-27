import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const ListSearchMovies = ({ movies }) => {
  let location = useLocation();
  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

ListSearchMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default ListSearchMovies;
