import React, { useState } from 'react';

import Genre from '../../components/Genre';

const Index = () => {
    const [showComponant, setShowComponant] = useState(false)

    const handleClick = () => {
        setShowComponant((showComponant) => !showComponant);
    };

    return (
        <div className="genre">
            <span className="genre__title">Movies</span>
            <span className='genre__btn' onClick={handleClick}>Genres</span>

            {showComponant && <Genre showComponant={handleClick} />}

        </div >
    );
}

export default Index;
