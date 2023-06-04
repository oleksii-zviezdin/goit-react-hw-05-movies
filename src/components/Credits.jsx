import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCreditsById } from '../service/fetchAPI';

const Credits = () => {
  const [dataCast, setDataCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCreditsById(movieId)
      .then(({ cast }) => {
        const filteCast = cast.filter(
          fCast => fCast.known_for_department === 'Acting'
        );
        setDataCast(filteCast);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);

  return (
    <>
      {dataCast.length > 0 && (
        <ul>
          {dataCast.map(({ id, profile_path, name, character }) => {
            const IMG = profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : `https://via.placeholder.com/100x150`;
            return (
              <li key={id}>
                <img width="100" src={`${IMG}`} alt={`${name}_${id}`} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {dataCast.length === 0 && <p>We don't have any credits for this movie</p>}
    </>
  );
};

export default Credits;
