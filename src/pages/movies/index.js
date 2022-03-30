import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Index = () => {
    const [genres, setGenres] = useState([]);
    const [moviesByGenre, setMoviesByGenre] = useState([]);

    const apiUrl = "https://api.themoviedb.org/3"
    const apiKey = "fd7bff04ac1e8d64d6c38c9200b46fb8";

    useEffect(() => {
        return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=fd7bff04ac1e8d64d6c38c9200b46fb8")
            .then((res) => res.json())
            .then((data) => {
                setGenres(data.genres);
            })

    }, []);

    const handleGenreClick = (genre_id) => {
        return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genre_id}`)
            .then((res) => res.json())
            .then((data) => {
                setMoviesByGenre(data.results);
                console.log("RESULT:", data.results);
                console.log("GENRE:", genre_id);
            })
    };

    return (
        <div>
            {genres.map((genre) => {
                return (
                    <li className="" key={genre.id}>
                        <button
                            type="button"
                            className=""
                            onClick={() => {
                                handleGenreClick(genre.id);
                            }}
                        >
                            {genre.name}

                        </button>
                    </li>
                )
            })}
        </div >
    );
}

export default Index;
