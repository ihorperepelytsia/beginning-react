import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Nav from "../Nav/Nav";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const MoviesDetailsPage = lazy(() => import("../../pages/MoviesDetailsPage"));
const Cast = lazy(() => import("../../pages/Cast"));
const Reviews = lazy(() => import("../../pages/Reviews"));

import { getTrending } from "../../services/api";
const App = () => {
  const [trending, setTrending] = useState([]);
  const [spinners, setSpinners] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    setFirstLoad(true);
    if (firstLoad) {
      try {
        setSpinners(true);

        getTrending()
          .then(setTrending)
          .finally(() => setSpinners(false));
      } catch (error) {
        console.log(error);
      }
    }
  }, [firstLoad]);
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<HomePage trending={trending} />} />
            <Route
              path="movies"
              element={<MoviesPage setSpinners={setSpinners} />}
            />
            <Route
              path="movies/:movieId"
              element={<MoviesDetailsPage setSpinners={setSpinners} />}
            >
              <Route path="cast" element={<Cast setSpinners={setSpinners} />} />
              <Route
                path="reviews"
                element={<Reviews setSpinners={setSpinners} />}
              />
            </Route>

            <Route path="*" element={<div>Not pages</div>} />
          </Route>
        </Routes>
      </Suspense>
      <Loader isLoading={spinners} />
      <Toaster />
    </>
  );
};

export default App;
