import React from 'react';

import Image from 'next/image';

import background from "../../public/assets/background.jpeg";

import Button from '../../components/Button';

const Index = () => {
    return (
        <div>
            <Image src={background} alt="Netflix background" className="" />
            <div className="overlay"></div>
            <div className="modal">
                <div className="modal__header" >

                    <div className='modal__content'>
                        <h1 className='modal__title'></h1>
                    </div>
                </div>

                <div className='modal__conten'>
                    <p className='modal__description'></p>
                    <p className='modal__description'>test</p>
                    <p className='modal__description'>test</p>
                    <Button title="Register" />
                </div>
            </div>
        </div>
    );
}

export default Index;
