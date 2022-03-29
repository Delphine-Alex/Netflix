import React from 'react';

const Moviecard = (movie) => {
    return (
        <div>

            <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie && movie.title || movie && movie.original_title}
                className="search__picture"
            />
            <div className="search__icons">
                <div>
                    {/* <PlayCircleIcon onClick={() => router.push(`/video/${movie.id}`)} /> */}
                </div>
            </div>
        </div>
        // 
    );
}

export default Moviecard;
