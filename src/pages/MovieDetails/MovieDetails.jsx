import { fetchMovieById } from "components/fetchAPI";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BackBtn from "components/backBtn";
import { MovieDetailsStyled } from "./MovieDetails.styled";

const MovieDetails = () => {
    const [dataMovie, setDataMovie] = useState(null);
    const { movieId } = useParams();
    const urlLocation = useLocation();
    
    useEffect(() => {fetchMovieById(movieId, setDataMovie)
    }, [movieId,]);
    console.log(dataMovie)

    let IMG = null;
    let releaseData = null;
    if (dataMovie) {
        IMG = dataMovie.poster_path ? `https://image.tmdb.org/t/p/w500/${dataMovie.poster_path}` : `https://via.placeholder.com/500x750`;
        releaseData = dataMovie.release_date ? `(${dataMovie.release_date.slice(0, 4)})` : '';
    }
    return (
        <>
            <Link to={urlLocation.state ? urlLocation.state.from  :'/movies'}><BackBtn /></Link>
        <MovieDetailsStyled>
            {dataMovie &&
                <>
                    <div>
                        <img
                            src={IMG}
                            alt={dataMovie.title}
                        />
                    </div>
                    <div>
                        <h1>{`${dataMovie.title} ${releaseData}`}</h1>
                        <span >User Score: {Math.round(dataMovie.vote_average * 10)}%</span>
                        <h2>Overview</h2>
                            <p>{dataMovie?.overview}</p>
                            <p>{!dataMovie.overview && `We don't have any overwiev for this movie`}</p>
                        <h3>Genres</h3>
                            {dataMovie?.genres && dataMovie.genres.map(({ name, id }) => <span key={id}>{name} </span>) }
                            <p>{!dataMovie.genres.length && `We don't have any genres for this movie`}</p>
                    </div>
                </>}
            </MovieDetailsStyled>
            <div>
                <h4>Additional information</h4>
                <ul>
                    <li>Credits</li>
                    <li>Reviews</li>
                </ul>
            </div>
            </>
    )
}

export default MovieDetails