import React, { useState } from 'react';

import Input from '../../components/Input';
import MovieCard from '../../components/MovieCard';

const Index = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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
                        <div className="search__pictures" key={movie.id}>
                            < MovieCard {...movie} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Index;
