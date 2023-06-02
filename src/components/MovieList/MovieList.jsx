import { Link } from "react-router-dom";

const MovieList = ({ data, location }) => {
    return(
            <ul>
                {data && data.map(({title, id}) => <li key={id}><Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link></li>)}
            </ul>
    )
}

export default MovieList