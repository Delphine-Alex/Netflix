import React from 'react';
import { useRouter } from 'next/router';

import Button from './Button';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Modal = ({ showModal, movies, bannerStyle }) => {

    const router = useRouter();

    return (
        <>
            <div className="overlay" onClick={showModal}></div>
            <div className="modal" >
                <div className="modal__header" style={bannerStyle}>
                    <div className="close__cross" onClick={showModal}>
                        <span></span>
                        <span></span>
                    </div>

                    <div className='modal__content'>
                        <h1 className='modal__title'>{movies && movies.title || movies && movies.original_title}</h1>
                        <div className="banner__btn">
                            < Button icon={<PlayArrowIcon />} title="Play" type="button" classes="btn btn__color_white" function={() => router.push(`/video/${movies.id}`)} />
                        </div>
                    </div>
                </div>

                <div className='modal__conten'>
                    <p className='modal__description'>{movies && movies.overview}</p>
                </div>
            </div>
        </>

    );
}

export default Modal;
