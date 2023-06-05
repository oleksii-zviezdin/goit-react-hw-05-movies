import { useEffect, useState } from 'react';
import { fetchSearchMovie } from 'service/fetchAPI';
import Searchbar from 'components/Searchbar';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const movieId = searchParams.get(`movieId`) ?? '';

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);

    fetchSearchMovie(movieId)
      .then(({ results }) => {
        if (!results.length) {
          setSearchParams({});
          throw new Error(`за запитом "${movieId}" нічого не знайдено`);
        }
        setData(results);
      })
      .catch(err => alert('error:' + err))
      .finally(setIsLoading(false));
  }, [movieId, setSearchParams]);

  const handleSubmit = searchMovieId => {
    if (!searchMovieId) return setSearchParams({});
    setSearchParams({ movieId: searchMovieId });
  };

  return (
    <main>
      {isLoading && <Loader />}
      <Searchbar handleSubmit={handleSubmit} />
      {data.length !== 0 && <MovieList data={data} />}
      {!isLoading && <MovieList data={data} />}
    </main>
  );
};

export default Movies;
