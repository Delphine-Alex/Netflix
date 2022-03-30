import React, { useState } from 'react';

import { useRouter } from 'next/router';

import Input from '../../components/Input';
import Modal from '../../components/Modal';

import moviesService from '../../services/movies.service';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Index = () => {
    const [movies, setMovies] = useState([]);
    const [showModal, setShowModal] = useState();
    const [searchTerm, setSearchTerm] = useState("");

    const router = useRouter();

    const apiUrl = "https://api.themoviedb.org/3"
    const apiKey = "fd7bff04ac1e8d64d6c38c9200b46fb8";

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=` + searchTerm)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            })
        setSearchTerm("");
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

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
        <div className="search">

            <form onSubmit={handleSubmit}>
                < Input
                    name="search"
                    id="search"
                    type="text"
                    classes="form__input__search"
                    required={false}
                    placeholder="Search..."
                    value={searchTerm}
                    handleChange={handleOnChange}
                />
            </form>

            <div className="search__content">
                {movies && movies.map((movie) => {
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
        </div>
    );
}

export default Index;
