import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Netflix from "../../public/assets/netflix_logo.png";

const Index = () => {
    const [inputs, setInputs] = useState({});

    const router = useRouter();

    const submitSignUp = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    return (
        <div className='signup'>
            <div className="signup__header">
                <img src={Netflix.src} className="signup__logo" />
                <a className="signup__header__link" href="/">Sign In</a>
            </div>

            <div className="signup__content">
                <form onSubmit={(e) => submitSignUp(e)}>
                    <h1 className="signup__main_title">Create a password to start your membership</h1>
                    <div className="signup__subtitle">Just a few more steps and you're done!</div>
                    <div className="signup__title">We hate paperwork, too.</div>

                    <Input
                        name="email"
                        id="email"
                        type="email"
                        classes="form__input__signup"
                        required={false}
                        placeholder="Add a email"
                        handleChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    />
                    <Input
                        name="password"
                        id="password"
                        type="password"
                        classes="form__input__signup"
                        required={false}
                        placeholder="Add a password"
                        handleChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />
                    <Button title="Next" classes="btn btn__color-red-signup" function={() => router.push("/browser")} />
                </form>
            </div>
        </div>
    );
}

export default Index;
