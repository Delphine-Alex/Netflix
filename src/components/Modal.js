import React from 'react';
import { useRouter } from 'next/router';

import Button from './Button';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Modal = ({ onClose, movie, bannerStyle }) => {
    const router = useRouter();

    const addToFavorite = (element) => {

        const movieToInsert = {
            id: element.id,
            title: element.title,
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
                console.log("Sorry but your movie is already in favorite")
            }

            localStorage.setItem("favorite", JSON.stringify(movieArray));

        } else {
            movieArray.push(movieToInsert)
            localStorage.setItem("favorite", JSON.stringify(movieArray));
        }

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

                    <div className='modal__content'>
                        <h1 className='modal__title'>{movie && movie.title || movie && movie.original_title}</h1>
                        <div className="modal__btn">
                            < Button icon={<PlayArrowIcon />} title="Play" type="button" classes="btn btn__color_white" function={() => router.push(`/video/${movie.id}`)} />
                            < AddCircleOutlineIcon className="modal__icon" onClick={() => addToFavorite(movie)} />
                        </div>
                    </div>
                </div>

                <div className='modal__conten'>
                    <p className='modal__description'>{movie && movie.overview}</p>
                </div>
            </div>
        </>

    );
}

export default Modal;
