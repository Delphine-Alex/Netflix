import React, { useState, useEffect } from 'react';
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
                src={movie ? `https://www.youtube.com/embed/${movie.key}` : "https://assets.b9.com.br/wp-content/uploads/2018/10/youtube_fail.jpg"}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                className='video__error'
            >
            </iframe>
        </>
    );
}

export default Video;
