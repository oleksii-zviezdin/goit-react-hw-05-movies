const BASE_URL = `https://api.themoviedb.org/3/`;

const fetch = require('node-fetch');
const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTBkOGUyNTQ0ZTgxNzg3NTJlYTQ3YTI0ZGI3NjFkOCIsInN1YiI6IjY0NmQxOTYxYzM1MTRjMmIwNjg4OTdiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1c5ZzEt1F0rRDlRLvBxcNocvVNrwAuMtwV3umPbxDRg'
    }
    };

const fetchTrandingMovies = async (setData) => {
    const url = `${BASE_URL}trending/movie/day?language=en-US`;
    
            await fetch(url, options)
            .then(res => res.json())
            .then(({results}) => setData(results))
            .catch(err => console.error('error:' + err))
}

const fetchSearchMovie = async (value, setData, setValue) => {
    const trimValue = value.trim();
    const url = `${BASE_URL}search/movie?query=${trimValue}&include_adult=true&language=en-US&page=1`;

    if (!trimValue) {
        return
    }

    await fetch(url, options)
    .then(res => res.json())
    .then(({ results }) => {
        if (!results.length) throw new Error(`за запитом "${value}" нічого не знайдено`);
        setData(results)
        setValue(value)
    })
    .catch(err => console.error('error:' + err))
}

const fetchMovieById = async (movieId, setDataMovie) => {
    const url = `${BASE_URL}movie/${movieId}?language=en-US`;

    await fetch(url, options)
    .then(res => res.json())
    .then(movieData => setDataMovie(movieData))
    .catch(err => console.error('error:' + err));
}

const fetchCreditsById = async (movieId, setDataCast) => {
    
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    
    await fetch(url, options)
    .then(res => res.json())
    .then(({ cast }) => {
        const filteCast = cast.filter(fCast => fCast.known_for_department === "Acting")
        setDataCast(filteCast)
    })
    .catch(err => console.error('error:' + err));
}

const fetchReviewsById = async (movieId, setDataReviews) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
    await fetch(url, options)
        .then(res => res.json())
        .then(({results}) => setDataReviews(results))
        .catch(err => console.error('error:' + err));
}

export {fetchSearchMovie, fetchTrandingMovies, fetchMovieById, fetchCreditsById, fetchReviewsById}