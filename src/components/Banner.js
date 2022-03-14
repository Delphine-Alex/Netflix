import React from 'react';
import { useState, useEffect } from 'react';

import Button from './Button';

import moviesService from '../services/movies.service';

const Banner = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        moviesService.getMovies()
            .then((data) => {
                setMovies(data.results
                [
                    Math.floor(Math.random() * data.results.length)
                ]);
            })
            .catch(err => console.log(err))
    }, []);

    console.log(movies);

    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`
    }

    return (
        <div className='banner' style={bannerStyle}>
            <div className='banner__content'>
                <h1 className='banner__title'>{movies && movies.title || movies && movies.original_title}</h1>
                <p className='banner__description'>{movies && movies.overview}</p>
                <div className="banner__btn">
                    <Button title="Lecture" type="button" classes="btn btn__color-white" />
                    <Button title="Plus d'infos" type="button" classes="btn btn__color-grey" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
