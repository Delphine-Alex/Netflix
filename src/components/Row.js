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
                <img className="row__image" alt="Image" />
            </div>
        </div>
    );
}

export default Row;
