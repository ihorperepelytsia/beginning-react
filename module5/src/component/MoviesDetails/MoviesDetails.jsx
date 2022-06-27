import React from "react";
import PropTypes from "prop-types";
import { MovieDetails, Description, ListGenres } from "./MoviesDetails.styled";
const MoviesDetails = ({ film }) => {
  const {
    poster_path,
    title,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = film;

  return (
    <MovieDetails>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
          alt={title}
        />
      </div>
      <Description>
        <h2>
          {original_title} ({release_date})
        </h2>
        <p>User score: {vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ListGenres>
          {genres.length > 0
            ? genres.map(({ id, name }) => <li key={id}>{name}</li>)
            : "No genres"}
        </ListGenres>
      </Description>
    </MovieDetails>
  );
};
MoviesDetails.propTypes = {
  film: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
export default MoviesDetails;
