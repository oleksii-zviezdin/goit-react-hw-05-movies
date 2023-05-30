import { useEffect, useState } from "react"
import { fetchSearchMovie } from "components/fetchAPI"
import { SearchButton } from "./Movies.styled"
const { Link, useSearchParams, useLocation } = require("react-router-dom")

const Movies = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState(``); // записую значення попереднього запиту у ф-ції fetchSearchMovie
    const [searchParams, setSearchParams] = useSearchParams();

    const movieId = searchParams.get(`movieId`) ?? "";
    const urlLocationMovies = useLocation();

    const handleChange = e => {
        const inputValue = e.currentTarget.value;
        if (inputValue === '') {
            return setSearchParams({})
        }
        setSearchParams({movieId: inputValue})
    }
        
        useEffect(() => {
            if (data.length !== 0 || movieId === '' || movieId === value) {
                return
            } else {
                fetchSearchMovie(movieId, setData, setValue)
            }
        
    },[data.length, movieId, value])

const handleSubmit = e => {
    e.preventDefault()
    if(value === movieId) return
    fetchSearchMovie(movieId, setData, setValue)
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    value={movieId}
                />
                <SearchButton type="submit">Search</SearchButton>
            </form>
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