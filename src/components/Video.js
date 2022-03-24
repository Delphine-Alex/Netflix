import React, { useState, useEffect } from 'react';
// import React from 'react';
import { useRouter } from 'next/router';

import moviesService from '../services/movies.service';

const Video = () => {
    const [movie, setMovies] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        moviesService.getVideo(id)
            .then((data) => {
                setMovies(data.results[0].key);
                //console.log("results", data.results);
                console.log("One DATA", data.results[0]);
                console.log("KEY", data.results[0].key);
            })
            .catch(err => console.log(err))
    }, [id]);

    return (
        <>
            <iframe
                width="560" height="315"
                //src="https://www.youtube.com/embed/a2GujJZfXpg"
                src={`https://www.youtube.com/embed/${movie}`}
                title="YouTube video player" frameBorder="0"
                //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </>
    );
}

export default Video;
