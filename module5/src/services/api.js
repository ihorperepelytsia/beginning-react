import axios from "axios";
const API_KEY = "fbc84fa674b06783dc43ba499dadf74a";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
export const getTrending = async () => {
  const res = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return res.data.results;
};
export const getSearch = async (query) => {
  const res = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&page=1`
  );
  return res.data.results;
};
export const getMovieDetails = async (movieId) => {
  const res = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};
export const getMovieCredits = async (movieId) => {
  const res = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return res.data.cast;
};
export const getMovieReviwse = async (movieId) => {
  const res = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res.data.results;
};
