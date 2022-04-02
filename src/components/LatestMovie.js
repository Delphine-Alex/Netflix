import React, { useState, useEffect } from 'react'

import moviesService from '../services/movies.service';

import Modal from './Modal';


const LatestMovie = () => {
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState([])

    useEffect(() => {
        moviesService.getLatest()
            .then((data) => {
                setMovie(data)
            })
            .catch(err => console.log(err))
    }, []);

    const handleClick = () => {
        setShowModal((showModal) => !showModal);
    };


    return (
        <>
            <div className='latest' onClick={handleClick}>
                <div className='latest__bar'></div>
                <div className='latest__content'>
                    <>
                        <img
                            src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"}
                            alt={movie && movie.title}
                            className="latest__picture"
                        />
                    </>
                    <div className='latest__description'>
                        <div className='latest__title'>New Arrival</div>
                        <div className='latest__title'>{movie.title}</div>
                        <div className='latest__title latest__title__time'>1 day ago</div>
                    </div>
                </div>
            </div>
            {showModal && <Modal showModal={handleClick} movie={movie} onClose={() => handleClick(undefined)} />}
        </>
    )
}

export default LatestMovie;
