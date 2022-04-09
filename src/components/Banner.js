import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Button from './Button';
import Genre from './Genre';
import Modal from './Modal';

import moviesService from '../services/movies.service';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Banner = (props) => {
    const [movie, setMovie] = useState([])
    const [showModal, setShowModal] = useState(false);

    const router = useRouter();

    const handleClick = () => {
        setShowModal((showModal) => !showModal);
    };

    useEffect(() => {
        moviesService.getPopular()
            .then((data) => {
                setMovie(data.results
                [
                    Math.floor(Math.random() * data.results.length) - 1
                ]);
            })
            .catch(err => console.log(err))
    }, []);

    const bannerStyle = {
        backgroundImage: `url(${movie?.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }

    const truncate = (string) => {
        return string?.length > 150 ? `${string.substring(0, 150)}...` : string
    };

    return (
        <div className='banner' style={bannerStyle}>

            <div className='banner__content'>
                <h1 className='banner__title'>{movie && movie.title || movie && movie.original_title}</h1>
                <p className='banner__description'>{truncate(movie && movie.overview)}</p>
                <div className="banner__btn">
                    < Button title="Play" icon={<PlayArrowIcon />} type="button" classes="btn btn__color_white" function={() => router.push(`/video/${movie.id}`)} />
                    < Button title="More Info" icon={<ErrorOutlineIcon />} type="button" classes="btn btn__color_grey" function={handleClick} />
                </div>
            </div>
            {showModal && <Modal showModal={handleClick} movie={movie} onClose={() => handleClick(undefined)} />}
        </div>
    );
}

export default Banner;
