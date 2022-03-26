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

    const handleClick = (showModalId) => {
        setShowModal(showModalId)

    };

    useEffect(() => {
        moviesService.getDiscover()
            .then((data) => {
                setMovie(data.results);
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <div className="row">
            <div className="row__content">
                <h2 className="row__title">{props.title}</h2>
                <div className="row__pictures">

                    {movie.map((movie) => {
                        return (
                            <div key={movie.id}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                    alt={movie && movie.title || movie && movie.original_title}
                                    className="row__picture"
                                />
                                <div className="row__icons">
                                    <div>
                                        <PlayCircleIcon onClick={() => router.push(`/video/${movie.id}`)} />
                                        <AddCircleOutlineIcon className="row__icon" />
                                    </div>
                                    <ExpandCircleDownIcon className="row__icon" onClick={() => handleClick(movie.id)} />
                                </div>

                                {showModal === movie.id && <Modal showModal={() => handleClick(movie.id)} onClose={() => handleClick(undefined)} movie={movie} />}
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}

export default Row;
