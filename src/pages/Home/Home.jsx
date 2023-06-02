
import { useEffect, useState } from "react"
import { fetchTrandingMovies } from "service/fetchAPI";
import { useLocation } from "react-router-dom";
import MovieList from "components/MovieList/MovieList";


const Home = () => {
    const [data, setData] = useState([]);

    const urlLocation = useLocation();
    
    useEffect(() => {
        fetchTrandingMovies(setData)
            .then(({ results }) => setData(results))
            .catch(err => console.error('error:' + err))
    }, []);

    return (
        <main>
            <h1>Trending today</h1>
            <MovieList  data={data} location={urlLocation} />
        </main>
    )
}

export default Home