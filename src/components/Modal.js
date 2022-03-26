import React from 'react';
import { useRouter } from 'next/router';

import Button from './Button';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Modal = ({ onClose, showModal, movie, bannerStyle }) => {

    const router = useRouter();

    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className="modal" >
                <div className="modal__header" style={bannerStyle}>
                    <div className="close__cross" onClick={onClose}>
                        <span></span>
                        <span></span>
                    </div>

                    <div className='modal__content'>
                        <h1 className='modal__title'>{movie && movie.title || movie && movie.original_title}</h1>
                        <div className="modal__btn">
                            < Button icon={<PlayArrowIcon />} title="Play" type="button" classes="btn btn__color_white" function={() => router.push(`/video/${movie.id}`)} />
                            <AddCircleOutlineIcon className="modal__icon" />
                        </div>
                    </div>
                </div>

                <div className='modal__conten'>
                    <p className='modal__description'>{movie && movie.overview}</p>
                </div>
            </div>
        </>

    );
}

export default Modal;
