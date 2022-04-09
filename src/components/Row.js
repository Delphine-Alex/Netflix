import React, { useState, useEffect } from "react";

import moviesService from "../services/movies.service";

import MovieCard from "./MovieCard";


const Row = (props) => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        if (props.title === "Top rated on Netflix") {
            moviesService.getMovies()
                .then((data) => {
                    setMovie(data.results);
                })
                .catch(err => console.log(err))
        } else if (props.title === "Popular on Netflix") {
            moviesService.getPopular()
                .then((data) => {
                    setMovie(data.results);
                })
                .catch(err => console.log(err))
        } else if (props.title === "Action & Adventure") {
            moviesService.getDiscoverActionAndAdventure()
                .then((data) => {
                    setMovie(data.results);
                })
                .catch(err => console.log(err))
        } else if (props.title === "TV Horror") {
            moviesService.getDiscoverTvHorror()
                .then((data) => {
                    setMovie(data.results);
                })
                .catch(err => console.log(err))
        } else {
            moviesService.getDiscoverRomanticComedics()
                .then((data) => {
                    setMovie(data.results);
                })
                .catch(err => console.log(err))
        }
    }, []);


    return (
        <div className="row">

            <h2 className="row__title">{props.title}</h2>

            <div className="row__wrapper">
                {movie.map((movie) => {
                    return (
                        <div key={movie.id}>
                            < MovieCard {...movie} />
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Row;
