import { useEffect, useRef, useState } from "react"
import { fetchSearchMovie } from "service/fetchAPI"
import Searchbar from "components/Searchbar"
import { useSearchParams, useLocation } from "react-router-dom"
import MovieList from "components/MovieList/MovieList"

const Movies = () => {
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get(`movieId`) ?? "";
    const previousMovieId = useRef(movieId)
console.log(previousMovieId)
    const urlLocation = useLocation();

    useEffect(() => {
        if (!movieId) return
        
        fetchSearchMovie(movieId)
            .then(({ results }) => {
                if (!results.length) throw new Error(`за запитом "${movieId}" нічого не знайдено`);
                setData(results)
            })
            .catch(err => alert('error:' + err));
    }, [movieId])
    
    const handleSubmit = searchMovieId => {
        console.log(`this is in Movies page ${searchMovieId}`)
        
        if (searchMovieId === ''|| !searchMovieId) return setSearchParams({})
        setSearchParams({ movieId: searchMovieId })
        fetchSearchMovie(searchMovieId)
    };

    return (
        <main>
            <Searchbar handleSubmit={handleSubmit}/>
            {data.length !== 0 &&
            <MovieList data={data} location={urlLocation} />}
        </main>
    )
}

export default Movies