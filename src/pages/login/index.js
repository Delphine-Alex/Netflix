import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Button from '../../components/Button';
import Input from '../../components/Input';

import Netflix from "../../public/assets/netflix_logo.png";

const Index = () => {
    const [inputs, setInputs] = useState({});

    const router = useRouter();

    const submitLogin = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    const bannerStyle = {
        backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/5491a337-dd7f-423e-aac5-6da179feb9b9/FR-fr-20220307-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }

    return (
        <div className="login" style={bannerStyle}>
            <div className="login__header">
                <img src={Netflix.src} className="login__logo" />
            </div>
            <div className='login__content'>
                <div className="login__main">
                    <h1 className="login__title">Sign In</h1>
                    <form onSubmit={(e) => submitLogin(e)}>
                        <Input
                            name="email"
                            id="email"
                            type="text"
                            classes="form__input__login"
                            required={false}
                            placeholder="Email or phone number"
                            handleChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                        <Input
                            name="password"
                            id="password"
                            type="password"
                            classes="form__input__login"
                            required={false}
                            placeholder="Password"
                            handleChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                        <Button title="Sign In" classes="btn btn__color_red" function={() => router.push("/browser")} />
                    </form>
                </div>

                <div className="login__second">
                    <p className="login__signup">
                        New to Netflix? <a href="/browser" className="login__redirection">Sign up now</a>.
                    </p>
                    <p className="login__protected">
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <a className="login__information" href="/">Learn more</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Index;
