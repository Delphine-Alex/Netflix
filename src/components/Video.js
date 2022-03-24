import React, { useState, useEffect } from 'react';
// import React from 'react';
import { useRouter } from 'next/router';

import moviesService from '../services/movies.service';

const Video = () => {
    const [movie, setMovies] = useState({});
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        moviesService.getVideo(id)
            .then((data) => {
                setMovies(data.results[0])
            })
            .catch(err => console.log(err))
    }, [id]);

    return (
        <>
            <iframe
                src={`https://www.youtube.com/embed/${movie.key}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            >
            </iframe>
        </>
    );
}

export default Video;
