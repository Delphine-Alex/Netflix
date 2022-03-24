import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
// import Link from 'next/link';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Button from './Button';
import Modal from './Modal';

import moviesService from '../services/movies.service';

const Banner = () => {
    const [movies, setMovies] = useState([])
    const [showModal, setShowModal] = useState(false);

    const router = useRouter();

    const handleClick = () => {
        setShowModal((showModal) => !showModal);
    };

    useEffect(() => {
        moviesService.getMovies()
            .then((data) => {
                setMovies(data.results
                [
                    Math.floor(Math.random() * data.results.length) + 0
                ]);
            })
            .catch(err => console.log(err))
    }, []);



    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }

    const truncate = (string) => {
        return string?.length > 150 ? `${string.substring(0, 150)}...` : string
    };

    return (
        <div className='banner' style={bannerStyle}>
            <div className='banner__content'>
                <h1 className='banner__title'>{movies && movies.title || movies && movies.original_title}</h1>
                <p className='banner__description'>{truncate(movies && movies.overview)}</p>
                <div className="banner__btn">
                    {/* <Link href={`/video/${movies.id}`}> */}
                    {/* <Link href="/login"> */}
                    < Button title="Play" icon={<PlayArrowIcon />} type="button" classes="btn btn__color_white" function={() => router.push(`/video/${movies.id}`)} />
                    {/* </Link> */}
                    < Button title="More Info" icon={<ErrorOutlineIcon />} type="button" classes="btn btn__color_grey" function={handleClick} />
                </div>
            </div>
            {showModal && <Modal showModal={handleClick} movies={movies} bannerStyle={bannerStyle} />}
        </div>
    );
}

export default Banner;
