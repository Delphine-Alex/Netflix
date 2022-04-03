import React, { useEffect, useState } from 'react';

import moviesService from '../services/movies.service';

import MovieCard from './MovieCard';

const Genre = () => {
    const [moviesByGenre, setMoviesByGenre] = useState([]);
    const [genres, setGenres] = useState([]);

    const apiUrl = "https://api.themoviedb.org/3"
    const apiKey = "fd7bff04ac1e8d64d6c38c9200b46fb8";

    useEffect(() => {
        moviesService.getGenre()
            .then((data) => {
                setGenres(data.genres);
            })
    }, []);

    const handleGenreClick = (genre_id) => {
        return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genre_id}`)
            .then((res) => res.json())
            .then((data) => {
                setMoviesByGenre(data.results);
            })
    };

    return (
        <>
            <div className="genre__content__btn">
                {genres.map((genre) => {
                    return (
                        <ul className="genre__lists" key={genre.id}>
                            <div className="genre__list" onClick={() => { handleGenreClick(genre.id) }}>
                                {genre.name}
                            </div>
                        </ul>
                    )
                })}
            </div>

            <div className="genre__content">
                {moviesByGenre && moviesByGenre.map((movie) => {
                    return (
                        <div key={movie.id} className="genre__pictures">
                            <MovieCard {...movie} />
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Genre;
