import { fetchMovieById } from "components/fetchAPI";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BackBtn from "components/backBtn";

const MovieDetails = () => {
    const [dataMovie, setDataMovie] = useState(null);
    const { movieId } = useParams();
    const urlLocation = useLocation();
    
    useEffect(() => {fetchMovieById(movieId, setDataMovie)
    }, [movieId,]);
    console.log(dataMovie)

    return (
        
        <div>
            <Link to={urlLocation.state ? urlLocation.state.from  :'/movies'}><BackBtn /></Link>
            {dataMovie &&
        <>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${dataMovie.poster_path}`}
                    alt={dataMovie.title}
                />
            <h1>{`${dataMovie.title}  ${dataMovie.release_date && dataMovie.release_date.slice(0,4)}`}</h1>
            <span >User Score: {Math.round(dataMovie.vote_average * 10)}%</span>
            <h2>Overview</h2>
            <p>{dataMovie?.overview}</p>
            <h3>Genres</h3>
            {dataMovie?.genres && dataMovie.genres.map(({ name, id }) => <span key={id}>{name} </span>) }
        </>}</div>
    )
}

export default MovieDetails