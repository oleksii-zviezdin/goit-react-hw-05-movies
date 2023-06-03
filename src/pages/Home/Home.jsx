
import { useEffect, useState } from "react"
import { fetchTrandingMovies } from "service/fetchAPI";
import { useLocation } from "react-router-dom";
import { LoaderCSS, LoaderWrapper } from '../../components/Loader/Loader.styled';
import MovieList from "components/MovieList/MovieList";


const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const urlLocation = useLocation();
    
    useEffect(() => {
        setIsLoading(true)

        fetchTrandingMovies(setData)
            .then(({ results }) => setData(results))
            .catch(err => console.error('error:' + err))
            .finally(setIsLoading(false));
    }, []);

    return (
        <main>
                <>
                    <h1>Trending today</h1>
            {isLoading &&  <LoaderWrapper>                 
                                <LoaderCSS />
                            </LoaderWrapper>}  
                    <MovieList data={data} location={urlLocation} />
                </>
        </main>
    )
}

export default Home