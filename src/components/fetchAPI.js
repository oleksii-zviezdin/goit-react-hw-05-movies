const BASE_URL = `https://api.themoviedb.org/3/`;

const fetchTrandingMovies = (setData) => {
    const fetch = require('node-fetch');
        
    const url = `${BASE_URL}trending/movie/day?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTBkOGUyNTQ0ZTgxNzg3NTJlYTQ3YTI0ZGI3NjFkOCIsInN1YiI6IjY0NmQxOTYxYzM1MTRjMmIwNjg4OTdiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1c5ZzEt1F0rRDlRLvBxcNocvVNrwAuMtwV3umPbxDRg'
        }
    };
    
            fetch(url, options)
            .then(res => res.json())
            .then(({results}) => setData(results))
        .catch(err => console.error('error:' + err))
}

const fetchSearchMovie = (value, setData, setValue) => {
    const fetch = require('node-fetch');
    const trimValue = value.trim();
    const url = `${BASE_URL}search/movie?query=${trimValue}&include_adult=true&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTBkOGUyNTQ0ZTgxNzg3NTJlYTQ3YTI0ZGI3NjFkOCIsInN1YiI6IjY0NmQxOTYxYzM1MTRjMmIwNjg4OTdiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1c5ZzEt1F0rRDlRLvBxcNocvVNrwAuMtwV3umPbxDRg'
        }
    }
    if (!trimValue) {
        return alert(`field cannot be empty`)
    }
    fetch(url, options)
        .then(res => res.json())
        .then(({ results }) => {
            if (!results.length) throw new Error(`за запитом "${value}" нічого не знайдено`);
            setData(results)
            setValue(value)
        })
        .catch(err => console.error('error:' + err))
}

const fetchMovieById = (movieId, setDataMovie) => {
    const url = `${BASE_URL}movie/${movieId}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTBkOGUyNTQ0ZTgxNzg3NTJlYTQ3YTI0ZGI3NjFkOCIsInN1YiI6IjY0NmQxOTYxYzM1MTRjMmIwNjg4OTdiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1c5ZzEt1F0rRDlRLvBxcNocvVNrwAuMtwV3umPbxDRg'
        }
    }

    fetch(url, options)
        .then(res => res.json())
        .then(movieData => {
            setDataMovie(movieData);
        })
        .catch(err => console.error('error:' + err));
}

export {fetchSearchMovie, fetchTrandingMovies, fetchMovieById}