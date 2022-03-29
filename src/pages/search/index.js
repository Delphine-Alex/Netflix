import React, { useState } from 'react';

import { useRouter } from 'next/router';

import Input from '../../components/Input';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Index = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const router = useRouter();

    const apiUrl = "https://api.themoviedb.org/3"
    const apiKey = "fd7bff04ac1e8d64d6c38c9200b46fb8";

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=` + searchTerm)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            })
        setSearchTerm("");
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="search">

            <form onSubmit={handleSubmit}>
                < Input
                    name="search"
                    id="search"
                    type="text"
                    classes="form__input__search"
                    required={false}
                    placeholder="Search..."
                    value={searchTerm}
                    handleChange={handleOnChange}
                />
            </form>

            <div className="search__content">
                {movies && movies.map((movie) => {
                    return (
                        <div key={movie.id} className="search__pictures">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                alt={movie && movie.title || movie && movie.original_title}
                                className="search__picture"
                            />
                            <div className="search__icons">
                                <div>
                                    <PlayCircleIcon onClick={() => router.push(`/video/${movie.id}`)} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Index;
