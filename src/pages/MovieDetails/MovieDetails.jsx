import { fetchMovieById } from 'service/fetchAPI';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import BackBtn from 'components/backBtn';
import { MovieDetailsStyled } from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const urlLocation = useLocation();
  const previousUrlLocation = useRef(urlLocation?.state?.from ?? '/movies');

  useEffect(() => {
    setIsLoading(true);

    fetchMovieById(movieId)
      .then(movieData => setDataMovie(movieData))
      .catch(err => console.error('error:' + err))
      .finally(setIsLoading(false));
  }, [movieId]);

  if (!dataMovie) return;

  const IMG = dataMovie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${dataMovie.poster_path}`
    : `https://via.placeholder.com/500x750`;
  const releaseData = dataMovie.release_date
    ? `(${dataMovie.release_date.slice(0, 4)})`
    : '';

  return (
    <>
      <Link to={previousUrlLocation.current}>
        <BackBtn />
      </Link>
      <MovieDetailsStyled>
        {isLoading && <Loader />}
        {dataMovie && (
          <>
            <div>
              <img src={IMG} alt={dataMovie.title} />
            </div>
            <div>
              <h1>{`${dataMovie.title} ${releaseData}`}</h1>
              <span>
                User Score: {Math.round(dataMovie.vote_average * 10)}%
              </span>
              <h2>Overview</h2>
              <p>{dataMovie?.overview}</p>
              {!dataMovie.overview && (
                <p>We don't have any overwiev for this movie</p>
              )}
              <h3>Genres</h3>
              {dataMovie?.genres &&
                dataMovie.genres.map(({ name, id }) => (
                  <span key={id}>{name} </span>
                ))}
              {!dataMovie.genres.length && (
                <p>We don't have any genres for this movie</p>
              )}
            </div>
          </>
        )}
      </MovieDetailsStyled>
      <div>
        <h4>Additional information</h4>
        <ul>
          <Link
            to={`credits`}
            // state={{ from: urlLocation?.state?.from ?? '/movies' }}
          >
            <li>Credits</li>
          </Link>
          <Link
            to={`reviews`}
            // state={{ from: urlLocation?.state?.from ?? '/movies' }}
          >
            <li>Reviews</li>
          </Link>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
