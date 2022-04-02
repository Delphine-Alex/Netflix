import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';

import moviesService from "../services/movies.service";

import Modal from "./Modal";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Row = (props) => {
    const [movie, setMovie] = useState([])
    const [showModal, setShowModal] = useState();

    const router = useRouter();

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

    const handleClick = (showModalId) => {
        setShowModal(showModalId)
    };

    const addToFavorite = (element) => {

        const movieToInsert = {
            id: element.id,
            title: element.title,
            overview: element.overview,
            backdrop_path: element.backdrop_path,
        }
        const movieArray = [];

        if (localStorage.getItem("favorite")) {
            const localStorageFavorite = JSON.parse(localStorage.getItem("favorite"));
            localStorageFavorite.forEach((item) => {
                movieArray.push(item);
            });

            const checkId = movieArray.findIndex((el) => el.id === element.id);
            if (checkId == -1) {
                movieArray.push(movieToInsert)
            } else {
                movieArray.splice(checkId, 1)
            }

            localStorage.setItem("favorite", JSON.stringify(movieArray));

        } else {
            movieArray.push(movieToInsert)
            localStorage.setItem("favorite", JSON.stringify(movieArray));
        }

    }

    return (
        <div className="row">

            <h2 className="row__title">{props.title}</h2>

            <div className="row__wrapper">
                {movie.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <img
                                src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"}
                                alt={movie && movie.title || movie && movie.original_title}
                                className="row__pictures"
                            />
                            <div className="row__icons" >
                                <div>
                                    < PlayCircleIcon onClick={() => router.push(`/video/${movie.id}`)} />
                                    < AddCircleOutlineIcon className="row__icon" onClick={() => addToFavorite(movie)} />
                                </div>
                                < ExpandCircleDownIcon className="row__icon" onClick={() => handleClick(movie.id)} />

                            </div>

                            {showModal === movie.id && <Modal showModal={() => handleClick(movie.id)} onClose={() => handleClick(undefined)} movie={movie} />}
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Row;
