import React, { useState } from 'react';

import { useRouter } from 'next/router';

import Modal from '../components/Modal';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Moviecard = (movie) => {
    const [showModal, setShowModal] = useState();

    const router = useRouter();

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
        <div>
            <img
                src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"}
                alt={movie && movie.title}
                className="movie__picture"
            />
            <div className="movie__icons">
                <div>
                    < PlayCircleIcon onClick={() => router.push(`/video/${movie.id}`)} />
                    < AddCircleOutlineIcon className="movie__icon" onClick={() => addToFavorite(movie)} />
                </div>
                < ExpandCircleDownIcon className="movie__icon" onClick={() => handleClick(movie.id)} />
            </div>
            {showModal === movie.id && <Modal showModal={() => handleClick(movie.id)} onClose={() => handleClick(undefined)} movie={movie} />}
        </div>
    );
}

export default Moviecard;
