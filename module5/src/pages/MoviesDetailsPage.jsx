import React, { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import PropTypes from "prop-types";
import MoviesDetails from "../component/MoviesDetails/MoviesDetails";
import {
  Link,
  Information,
} from "../component/MoviesDetails/MoviesDetails.styled";
const MoviesDetailsPage = ({ setSpinners }) => {
  const { movieId } = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  const [film, setMovieDetails] = useState({});
  const [moviesId, setMoviesId] = useState("");
  useEffect(() => {
    setMoviesId(movieId);
  }, []);
  useEffect(() => {
    if (moviesId.length > 0) {
      try {
        setSpinners(true);
        getMovieDetails(moviesId)
          .then(setMovieDetails)
          .finally(() => setSpinners(false));
      } catch (error) {
        console.log(error);
      }
    }
  }, [moviesId]);

  const handleButtonBack = () => {
    if (!location.state) {
      navigate("/");
      return;
    }

    navigate(-1);
  };
  return (
    <>
      <button onClick={handleButtonBack}>Back</button>
      {film.original_title && (
        <>
          <MoviesDetails film={film} />
          <Information>
            <h5>Additional information</h5>
            <ul>
              <li>
                <Link to="cast" state={{ from: location }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: location }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </Information>
        </>
      )}

      <Outlet />
    </>
  );
};

MoviesDetailsPage.propTypes = {
  setSpinners: PropTypes.func.isRequired,
};
export default MoviesDetailsPage;
