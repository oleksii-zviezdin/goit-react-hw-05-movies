import { useEffect, useRef, useState } from "react"
import { fetchSearchMovie } from "service/fetchAPI"
import Searchbar from "components/Searchbar"
import { useSearchParams, useLocation } from "react-router-dom"
import MovieList from "components/MovieList/MovieList"
import Loader from "components/Loader/Loader"

const Movies = () => {
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const movieId = searchParams.get(`movieId`) ?? "";
    const previousMovieId = useRef(movieId)
console.log(previousMovieId)
    const urlLocation = useLocation();

    useEffect(() => {
        if (!movieId || previousMovieId.current === '') return
        setIsLoading(true)
        fetchSearchMovie(movieId)
            .then(({ results }) => {
                if (!results.length) {  
                    throw new Error(`за запитом "${movieId}" нічого не знайдено`)
                };
                setData(results)
            })
            .catch(err => alert('error:' + err))
            .finally(setIsLoading(false));
    }, [movieId])
    
    const handleSubmit = searchMovieId => {
        console.log(`this is in Movies page ${searchMovieId}`)
        setIsLoading(true)
        
        if (!searchMovieId) return setSearchParams({})
        setSearchParams({ movieId: searchMovieId })
        fetchSearchMovie(searchMovieId)
            .then(({ results }) => {
                if (!results.length) {
                setSearchParams({})
                    throw new Error(`за запитом "${searchMovieId}" нічого не знайдено`)
                };
                setData(results)
            })
            .catch(err => {
                alert('error:' + err)
            })
            .catch(err => alert('error:' + err))
            .finally(setIsLoading(false));
    };

    return (
        <main>
            <Searchbar handleSubmit={handleSubmit}/>
            {/* {data.length !== 0 && <MovieList data={data} location={urlLocation} />} */}
            {!isLoading && <MovieList data={data} location={urlLocation} />}
            {isLoading && <Loader />}
        </main>
    )
}

export default Movies