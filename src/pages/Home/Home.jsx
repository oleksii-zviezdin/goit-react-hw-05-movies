import { useEffect, useState } from 'react';
import { fetchTrandingMovies } from 'service/fetchAPI';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchTrandingMovies(setData)
      .then(({ results }) => setData(results))
      .catch(err => console.error('error:' + err))
      .finally(setIsLoading(false));
  }, []);

  return (
    <main>
      {isLoading && <Loader />}
      <>
        <h1>Trending today</h1>
        <MovieList data={data} />
      </>
    </main>
  );
};

export default Home;
