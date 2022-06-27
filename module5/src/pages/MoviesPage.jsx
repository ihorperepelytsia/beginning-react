import React, { useState, useEffect } from "react";
import { getSearch } from "../services/api";
import toast from "react-hot-toast";
import ListSearchMovies from "../component/ListSearchMovies/ListSearchMovies";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

const MoviesPage = ({ setSpinners }) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");

  const handleChangeQuery = (e) => {
    e.preventDefault();
    let searchQueryValue = e.target.elements.query.value;
    setSearchParams({ query: searchQueryValue });
    setQuery(searchQueryValue);
    e.target.reset();
  };
  const getMovies = (value) => {
    try {
      setSpinners(true);
      getSearch(value)
        .then((res) => {
          if (res.length === 0) {
            toast.error("There is no movie with that name.");
            return;
          }
          setMovies([...res]);
        })
        .finally(() => {
          setSpinners(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchParams.get("query")) {
      setQuery(searchParams.get("query"));
    }
    if (query.length > 0) {
      getMovies(query);
    }
  }, [query]);
  return (
    <>
      <form onSubmit={handleChangeQuery}>
        <input name="query" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && <ListSearchMovies movies={movies} />}
    </>
  );
};

MoviesPage.propTypes = {
  setSpinners: PropTypes.func.isRequired,
};
export default MoviesPage;
