import { fetchReviewsById } from "./fetchAPI";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Reviews = () => {
    const [dataReviews, setDataReviews] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        fetchReviewsById(movieId, setDataReviews)
    }, [movieId])
    console.log(dataReviews)
    
    return (
        <>
        {dataReviews.length > 0 && <ul>
            {dataReviews.map(({ id, author, url, content }) => {
                return (
                    <li key={id}>
                        <p>
                            <strong>Author: {author}</strong>
                        </p>
                        <p>{content}</p>
                    </li>
                )
            })}
            </ul>}
            {dataReviews.length === 0 &&  <p>We don't have any rewievs for this movie</p>}
        </>
    )
}

export default Reviews