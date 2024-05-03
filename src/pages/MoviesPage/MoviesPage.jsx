import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { getMoviesSearch } from "../../data/movieApi";
import toast, { Toaster } from 'react-hot-toast';
import Loader from "../../components/Loader/Loader";
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get("query");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { inputSearch } = form.elements;
    setSearchParam({ query: inputSearch.value });
    form.reset();
  };

  useEffect(() => {
    if (!query) return
    async function getAllMovies() {
    try {
      setIsLoading(true);
      const data = await getMoviesSearch(query);
      if (!data.results || data.results.length === 0) {
        throw new Error("No movies found");
      }
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
      toast.error("Failed to fetch movies. Please try again later.");
      setSearchParam({});
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  } getAllMovies();
}, [query, setSearchParam]);


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFormSubmit(e);
    }
  };

  return (
    <>
      <div className={css.formContainer}>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="inputSearch"
            placeholder="Search movies"
            className={css.inputSearch}
            onKeyDown={handleKeyPress}
          />
          <button type="submit" className={css.buttonSearch}>Search</button>
        </form>
      </div>
      {isLoading && <Loader />}
      <div className={css.movieListContainer}>
        <MovieList movies={movies} />
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default MoviesPage;

