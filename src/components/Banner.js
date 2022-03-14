import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

import Button from './Button';

const Banner = () => {
    const [movies, setMovies] = useState([])

    const apiKey = "fd7bff04ac1e8d64d6c38c9200b46fb8";

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
                setMovies(result.data)
                console.log(result.data)
            } catch (err) {
                err && console.log(err.message);
            }
        }
        getData()
    }, []);

    return (
        <div>
            <h1>Titre</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
            </p>
            <Button title="Lecture" />
            <Button title="Plus d'infos" />

        </div>
    );
}

export default Banner;
