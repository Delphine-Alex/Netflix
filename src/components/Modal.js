import React from 'react';
import { useRouter } from 'next/router';

import Button from './Button';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Modal = ({ onClose, movie }) => {
    const router = useRouter();

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

    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "4px 4px 0px 0px"
    }

    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className="modal" >
                <div className="modal__header" style={bannerStyle}>

                    <div className="close__cross" onClick={onClose}>
                        <span></span>
                        <span></span>
                    </div>

                    <div className='modal__main'>
                        <h1 className='modal__title'>{movie && movie.title || movie && movie.original_title}</h1>
                        <div className="modal__btn">
                            < Button icon={<PlayArrowIcon />} title="Play" type="button" classes="btn btn__color_white" function={() => router.push(`/video/${movie.id}`)} />
                            < AddCircleOutlineIcon className="modal__icon" onClick={() => addToFavorite(movie)} />
                        </div>
                    </div>

                </div>

                <div className='modal__content'>
                    <p className='modal__description'>{movie && movie.overview}</p>
                </div>
            </div>
        </>

    );
}

export default Modal;
