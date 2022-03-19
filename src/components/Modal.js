import React from 'react';

const Modal = ({ showModal, movies, bannerStyle }) => {
    return (
        <>
            <div className="overlay" onClick={showModal}></div>
            <div className="modal" style={bannerStyle}>
                <div className="modal__header">
                    <div className="close__cross" onClick={showModal}>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <h1>{movies && movies.title || movies && movies.original_title}</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.
                </p>
            </div>
        </>

    );
}

export default Modal;
