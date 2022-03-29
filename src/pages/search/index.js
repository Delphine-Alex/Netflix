import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

// import moviesService from '../../services/movies.service';

import Input from '../../components/Input';

// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Index = () => {
    const [search, setSearch] = useState([]);

    const router = useRouter();

    const apiUrl = "https://api.themoviedb.org/3"
    const apiKey = "fd7bff04ac1e8d64d6c38c9200b46fb8";

    // useEffect(() => {
    //     return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&width_genres=28`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setSearch(data.results);
    //         })
    //         .catch(err => console.log(err))
    // }, []);

    useEffect((searchTerm) => {
        return fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=` + searchTerm)
            .then((res) => res.json())
            .then((data) => {
                setSearch(data);
                console.log(data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="search">

            < Input
                name="search"
                id="search"
                type="text"
                classes="form__input__search"
                required={false}
                placeholder="Search" />


            {/* {search ? (
                <div className="search__content">
                    {search.map((search) => {
                        return (
                            <div key={search.id} className="search__pictures">
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${search.backdrop_path}`}
                                    alt={search && search.title || search && search.original_title}
                                    className="search__picture"
                                />
                                <div className="search__icons">
                                    <div>
                                        <PlayCircleIcon onClick={() => router.push(`/video/${search.id}`)} />

                                    </div>

                                </div>


                            </div>
                        )
                    })}
                </div>
            ) : (
                " "
            )} */}
        </div>
    );
}

export default Index;
