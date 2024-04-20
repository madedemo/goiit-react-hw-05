import { useEffect, useState } from 'react';
import {getMovies} from '../../data/movieApi';
import MovieList from '../../components/MovieList/MovieList';


const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getAllMovies() {
            try {
                const data = await getMovies();
                setMovies(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        getAllMovies();
    }, []);

    return (
        <MovieList movies={movies} />
    )
}

export default HomePage