import React, { useState, useEffect } from "react";
import { getMovieCredits } from "../services/api";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
const ImgChange = styled.div`
  width: 138px;
  height: 175px;
  background-color: gray;
  text-align: center;
  p {
    padding: 0;
    margin: 0 auto;
    color: white;
    font-size: 150px;
  }
`;
const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    width: 15%;
    margin: 15px;
    box-shadow: 5px 5px 10px lightgrey;
    text-align: center;
  }
`;
const CastListImg = styled.div`
  div {
    margin: 0 auto;
  }
`;

const Cast = ({ setSpinners }) => {
  const [cast, setCast] = useState([]);
  const [moviesId, setMoviesId] = useState("");
  const { movieId } = useParams();
  useEffect(() => {
    setMoviesId(movieId);
  }, []);
  useEffect(() => {
    if (moviesId.length > 0) {
      try {
        setSpinners(true);

        getMovieCredits(moviesId)
          .then(setCast)
          .finally(() => setSpinners(false));
      } catch (error) {
        console.log(error);
      }
    }
  }, [moviesId]);
  return (
    <>
      <CastList>
        {cast.length > 0 ? (
          cast.map(({ cast_id, profile_path, name, character }) => (
            <li key={cast_id}>
              <CastListImg>
                {profile_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w138_and_h175_face${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <ImgChange>
                    <p>?</p>
                  </ImgChange>
                )}
              </CastListImg>
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          ))
        ) : (
          <div>No actors</div>
        )}
      </CastList>
    </>
  );
};
Cast.propTypes = {
  setSpinners: PropTypes.func.isRequired,
};
export default Cast;
