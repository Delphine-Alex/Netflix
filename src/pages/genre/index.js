import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Modal from '../../components/Modal';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Index = () => {
    const [moviesByGenre, setMoviesByGenre] = useState([]);
    const [showModal, setShowModal] = useState();
    const [genres, setGenres] = useState([]);

    const router = useRouter();

    const apiUrl = "https://api.themoviedb.org/3"
    const apiKey = "fd7bff04ac1e8d64d6c38c9200b46fb8";

    useEffect(() => {
        return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=fd7bff04ac1e8d64d6c38c9200b46fb8")
            .then((res) => res.json())
            .then((data) => {
                setGenres(data.genres);
            })

    }, []);

    const handleGenreClick = (genre_id) => {
        return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genre_id}`)
            .then((res) => res.json())
            .then((data) => {
                setMoviesByGenre(data.results);
            })
    };

    const handleClick = (showModalId) => {
        setShowModal(showModalId)
    };

    return (
        <div className="genre">
            <span className="genre__title">Movies</span>
            <div className="genre__content">
                {genres.map((genre) => {
                    return (
                        <ul className="genre__lists" key={genre.id}>
                            <a className="genre__list"
                                onClick={() => {
                                    handleGenreClick(genre.id);
                                }}
                            >
                                {genre.name}
                            </a>
                        </ul>
                    )
                })}
            </div>


            <div className="search__content">
                {moviesByGenre && moviesByGenre.map((movie) => {
                    return (
                        <div key={movie.id} className="search__pictures">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}` ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : "https://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg"}
                                alt={movie && movie.title}
                                className="search__picture"
                            />
                            <div className="search__icons">
                                <div>
                                    < PlayCircleIcon onClick={() => router.push(`/video/${movie.id}`)} />
                                    < AddCircleOutlineIcon className="search__icon" onClick={() => addToFavorite(movie)} />
                                </div>
                                < ExpandCircleDownIcon className="search__icon" onClick={() => handleClick(movie.id)} />
                            </div>
                            {showModal === movie.id && <Modal showModal={() => handleClick(movie.id)} onClose={() => handleClick(undefined)} movie={movie} />}
                        </div>
                    )
                })}
            </div>
        </div >
    );
}

export default Index;
