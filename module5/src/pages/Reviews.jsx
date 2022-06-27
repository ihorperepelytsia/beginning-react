import React, { useState, useEffect } from "react";
import { getMovieReviwse } from "../services/api";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
const Reviews = ({ setSpinners }) => {
  const [reviews, setReviews] = useState([]);
  const [moviesId, setMoviesId] = useState("");
  const { movieId } = useParams();
  useEffect(() => {
    setMoviesId(movieId);
  }, []);
  useEffect(() => {
    if (moviesId.length > 0) {
      try {
        setSpinners(true);
        getMovieReviwse(moviesId)
          .then(setReviews)
          .finally(() => setSpinners(false));
      } catch (error) {
        console.log(error);
      }
    }
  }, [moviesId]);
  return (
    <>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <div>No reviews</div>
        )}
      </ul>
    </>
  );
};
Reviews.propTypes = {
  setSpinners: PropTypes.func.isRequired,
};
export default Reviews;
