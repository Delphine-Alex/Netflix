import React, { useState } from 'react';

import Genre from '../../components/Genre';

const Index = () => {
    const [showModal, setShowModal] = useState()

    const handleClick = () => {
        setShowModal((showModal) => !showModal);
    };

    return (
        <div className="genre">
            <span className="genre__title">Movies</span>
            <span className='genre__btn' onClick={handleClick}>Genres</span>

            {showModal && <Genre showModal={handleClick} />}

        </div >
    );
}

export default Index;
