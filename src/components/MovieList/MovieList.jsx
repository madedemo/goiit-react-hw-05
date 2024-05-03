import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import Loader from '../Loader/Loader';

const MovieList = (movies) => {
    const location = useLocation();
    return (
            <ul className={css.movie_list}>
            {movies.isLoading && <Loader />}
            {movies.movies.map(movie => (
              <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
              </li>
          ))}
            </ul>
  )
}

export default MovieList