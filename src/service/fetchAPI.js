const BASE_URL = `https://api.themoviedb.org/3/`;

const fetch = require('node-fetch');
const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTBkOGUyNTQ0ZTgxNzg3NTJlYTQ3YTI0ZGI3NjFkOCIsInN1YiI6IjY0NmQxOTYxYzM1MTRjMmIwNjg4OTdiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1c5ZzEt1F0rRDlRLvBxcNocvVNrwAuMtwV3umPbxDRg'
    }
    };

const fetchTrandingMovies = data => {
    const url = `${BASE_URL}trending/movie/day?language=en-US`;
    if (data.length === 0) return
    
    return fetch(url, options)
        .then(res => {
            if (!res.ok) {
                throw new Error(`res.ok is "${res.ok}"`)
            }
            return res.json()
        })
}

const fetchSearchMovie = value => {
    const url = `${BASE_URL}search/movie?query=${value}&include_adult=false&language=en-US&page=1`;
    if (!value) return
    
    return fetch(url, options)
    .then(res => {
            if (!res.ok) throw new Error(`res.ok is "${res.ok}"`)
            return res.json()
        })
}

const fetchMovieById = (movieId) => {
    const url = `${BASE_URL}movie/${movieId}?language=en-US`;
    if(!movieId || movieId === "") return

    return fetch(url, options)
    .then(res => {
            if (!res.ok) throw new Error(`res.ok is "${res.ok}"`)
            return res.json()
        })
}

const fetchCreditsById = (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    
    return fetch(url, options)
    .then(res => {
            if (!res.ok) throw new Error(`res.ok is "${res.ok}"`)
            return res.json()
        })
}

const fetchReviewsById = (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;

    return fetch(url, options)
    .then(res => {
            if (!res.ok) throw new Error(`res.ok is "${res.ok}"`)
            return res.json()
        })
}

export {fetchSearchMovie, fetchTrandingMovies, fetchMovieById, fetchCreditsById, fetchReviewsById}