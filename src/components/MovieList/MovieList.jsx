import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ data }) => {
  const location = useLocation();
  return (
    <ul>
      {data.length !== 0 &&
        data.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MovieList;
