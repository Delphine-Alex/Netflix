import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import Modal from '../../components/Modal';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Index = () => {
    const [favorites, setFavorites] = useState([])
    const [showModal, setShowModal] = useState();

    const router = useRouter();

    const handleClick = (showModalId) => {
        setShowModal(showModalId)
    };

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem("favorite")) || []);
    }, []);

    const removeFavorite = (movie) => {
        const filteredFavorite = favorites.filter((item) => item.id !== movie.id)
        localStorage.setItem("favorite", JSON.stringify(filteredFavorite))
        setFavorites(filteredFavorite)
    }

    return (
        <div className="favorite">
            <div className="favorite__title">My List</div>

            {favorites ? (
                <div className="favorite__content">
                    {favorites.map((favorite) => {
                        return (
                            <div key={favorite.id} className="favorite__pictures">
                                <img
                                    src={favorite.backdrop_path ? `https://image.tmdb.org/t/p/original/${favorite.backdrop_path}` : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"}
                                    alt={favorite && favorite.title || favorite && favorite.original_title}
                                    className="favorite__picture"
                                />
                                <div className="favorite__icons">
                                    <div>
                                        <PlayCircleIcon onClick={() => router.push(`/video/${favorite.id}`)} />
                                        <CheckCircleOutlineIcon className="favorite__icon" onClick={() => removeFavorite(favorite)} />
                                    </div>
                                    <ExpandCircleDownIcon className="favorite__icon" onClick={() => handleClick(favorite.id)} />
                                </div>

                                {showModal === favorite.id && <Modal showModal={() => handleClick(favorite.id)} onClose={() => handleClick(undefined)} movie={favorite} />}
                            </div>
                        )
                    })}
                </div>
            ) : (
                " "
            )}
        </div >
    );
}

export default Index;
