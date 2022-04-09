import React from 'react';

import Banner from '../../components/Banner';
import Row from '../../components/Row';

const Index = () => {
    return (
        <>
            < Banner />
            < Row title="Top rated on Netflix" />
            < Row title="Popular on Netflix" />
            < Row title="Action & Adventure" />
            < Row title="Romantic Comedies" />
            < Row title="TV Horror" />
        </>
    );
}

export default Index;
