import React from "react";
import { useState, useEffect } from "react";

import moviesService from "../services/movies.service";

const Row = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        moviesService.getMovies()
            .then((data) => {
                setMovies(data.results);
            })
            .catch(err => console.log(err))
    }, []);

    console.log(movies)


    return (
        <div className="row">
            <div className="row__content">
                <h2 className="row__title">Title</h2>
                <div className="row__pictures">
                    {movies.map((movie) => {
                        return (
                            <div key={movie.id}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                    className="row__image"
                                    alt={movie && movie.title || movie && movie.original_title}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Row;
