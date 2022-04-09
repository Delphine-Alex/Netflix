import React from 'react';
import { useRouter } from 'next/router';

import Video from '../../../components/Video';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Index = () => {
    const router = useRouter();

    return (
        <div className='video'>
            <KeyboardBackspaceIcon onClick={() => router.push(`/browser`)} className="video__icon" />
            <Video />
        </div>
    );
}

export default Index;
