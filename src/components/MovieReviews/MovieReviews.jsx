import { useEffect, useState } from "react";
import { getMoviesReviews } from "../../data/movieApi";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css"


const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getReviews() {
            try {
                setIsLoading(true);
                const data = await getMoviesReviews(movieId);
                setReviews(data.results);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        getReviews();
    }, [movieId]);
    
  return (
      <div>
            {isLoading && <Loader />}
          <ul className={css.reviews_list}>
            {reviews.map(review => (
                <li className={css.reviews_item} key={review.id}>
                    <h3 className={css.reviews_title}>{review.author}</h3>
                    <p className={css.reviews_text}>{review.content}</p>
                </li>
            ))}
          </ul>
      </div>
  )
}

export default MovieReviews