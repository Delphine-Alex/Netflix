import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Index = () => {
    const [favorites, setFavorites] = useState([])

    const router = useRouter();

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem("favorite")) || []);
    }, []);

    // const removeFavorite = () => {
    //     localStorage.removeItem("favorite");
    //     setFavorites(null);
    // }

    // const removeFavorite = (favorite) => {
    //     const checkId = favorites.findIndex((el) => el.id === favorite.id);

    //     if (checkId > 1) {
    //         favorites[checkId].splice(favorite, 1);
    //     }
    //     // if (index > -1) {
    //     //     newFavorites.splice(index, 1);
    //     // if (checkId > -1) {
    //     //     favorites.splice(checkId, 1);
    //     // }
    //     localStorage.setItem(("favorite"), JSON.stringify(favorites));
    //     setFavorites(JSON.parse(localStorage.getItem("favorite")));
    // }

    return (
        <div className="favorite">
            <div className="favorite__title">My List</div>

            {favorites ? (
                <div className="favorite__content">
                    {favorites.map((favorite) => {
                        return (
                            <div key={favorite.id} className="favorite__pictures">
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${favorite.backdrop_path}`}
                                    alt={favorite && favorite.title || favorite && favorite.original_title}
                                    className="favorite__picture"
                                />
                                <div className="favorite__icons">
                                    <div>
                                        <PlayCircleIcon onClick={() => router.push(`/video/${favorite.id}`)} />
                                        <HighlightOffIcon className="favorite__icon"
                                        // onClick={removeFavorite} 
                                        />
                                    </div>
                                    <ExpandCircleDownIcon className="favorite__icon" />
                                </div>
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
