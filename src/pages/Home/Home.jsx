
import { useEffect, useState } from "react"
import { fetchTrandingMovies } from "components/fetchAPI";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([]);

    const ulrLocationHome = useLocation();
    
    useEffect(() => {
        if (!data.length) fetchTrandingMovies(setData)
    }, [data]);

    return (
        <main>
            <h1>Trending today</h1>
            <ul>
                {data && data.map(({title, id}) => <li key={id}><Link to={`/movies/${id}`} state={{ from: ulrLocationHome }}>{title}</Link></li>)}
            </ul>
        </main>
    )
}

export default Home