import axios from "axios";

const API_KEY = "2b1869bd2bb4ba18b41c170cd198a3fe";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjE4NjliZDJiYjRiYTE4YjQxYzE3MGNkMTk4YTNmZSIsInN1YiI6IjY2MjI2YzhiMzJjYzJiMDE2MzBkNzZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wa_XnlJ8acFDeX2aeDm4WYpcQ4eA3tn8P09DOmIb3gU";
const BASE_URL = "https://api.themoviedb.org/3";

const moviesApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
  headers: {
    Authorization: API_TOKEN,
  },
});

export const getMovies = async () => {
  try {
    const response = await moviesApi.get("trending/movie/day");
    return response.data;
  } catch (error) {
    console.log("Error movies", error);
    throw error;
  }
};

export const getMoviesbyId = async (movieId) => {
  try {
    const response = await moviesApi.get(`movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.log("Error ID", error);
    throw error;
  }
};

export const getMoviesCast = async (movieId) => {
  try {
    const response = await moviesApi.get(`movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    console.log("Error Cast", error);
    throw error;
  }
};

export const getMoviesReviews = async (movieId) => {
  try {
    const response = await moviesApi.get(`movie/${movieId}/reviews`);
    return response.data;
  } catch (error) {
    console.log("Error Reviews", error);
    throw error;
  }
};

export const getMoviesSearch = async (query) => {
  try {
    const response = await moviesApi.get(`search/movie`, {
      params: {
        query,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error Search", error);
    throw error;
  }
};
