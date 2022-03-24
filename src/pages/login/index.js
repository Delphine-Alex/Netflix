import React from 'react';
import Image from 'next/image';

import Button from '../../components/Button';
import Input from '../../components/Input';

import Background from "../../public/assets/background.jpeg";

const Index = () => {
    return (
        <div>
            <Image src={Background} alt="Netflix background" className="" />
            <div className="overlay"></div>
            <div className="login">

                <div className='login__content'>
                    <h1 className="login__title">Sign In</h1>
                    <form>
                        <Input
                            // label="Email"
                            name="email"
                            id="email"
                            type="text"
                            // classes="login__input"
                            required={false}
                            placeholder="Email or phone number"
                        />
                        <Input
                            // label="Email"
                            name="password"
                            id="password"
                            type="text"
                            // classes="login__input"
                            required={false}
                            placeholder="Password"
                        />
                    </form>
                    <Button title="Sign In" />
                </div>
            </div>
        </div>
    );
}

export default Index;
