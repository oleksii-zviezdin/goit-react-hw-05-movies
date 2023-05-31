import { useEffect, useState } from "react"
import { fetchSearchMovie } from "components/fetchAPI"
import { useRef } from "react"
import Searchbar from "components/Searchbar"
const { Link, useSearchParams, useLocation } = require("react-router-dom")

const Movies = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(``); // записую значення попереднього запиту у ф-ції fetchSearchMovie
    const [searchParams] = useSearchParams();
    let movieId = searchParams.get(`movieId`) ?? "";
    const previousValue = useRef(movieId);

    const urlLocationMovies = useLocation();

    useEffect(() => {
        if(previousValue.current === movieId) fetchSearchMovie(movieId, setData, setValue);
    }, [movieId])
    
    const handleSubmit = searchMovieId => {
        if(value === searchMovieId) return
        fetchSearchMovie(searchMovieId, setData, setValue)
    };

    return (
        <>
            <Searchbar handleSubmit={handleSubmit} searchValue={value} />
            {data.length !== 0 &&
            <>
                <div>
                    <ul>
                        {data.map(({ id, title }) =>
                            <li key={id}>
                                <Link to={`${id}`} state={{ from: urlLocationMovies }}>{title}</Link>
                            </li>)}
                    </ul>
                </div>
            </>}
        </>
    )
}

export default Movies