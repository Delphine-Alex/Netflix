import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Button from '../components/Button';
import Input from '../components/Input';

import Netflix from "../public/assets/netflix_logo.png";

const Home = () => {
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
    <div className="register" style={bannerStyle}>
      <div className="register__header">
        <img src={Netflix.src} className="register__logo" />
        < Button title="Sign In" classes="btn btn__color-red-login" function={() => router.push("/login")} />
      </div>
      <div className='register__content'>

        <h1 className="register__main_title">Unlimited movies, TV shows, and more.</h1>
        <h2 className="register__subtitle">Watch anywhere. Cancel anytime.</h2>
        <h3 className="register__title">Ready to watch? Enter your email to create or restart your membership.</h3>
        <form className="register__form" onSubmit={(e) => submitLogin(e)}>
          <Input
            name="email"
            id="email"
            type="text"
            classes="form__input__register"
            required={false}
            placeholder="Email adress"
            handleChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Button title="Get Started" classes="btn btn__color-red-register" function={() => router.push("/signup")} />
        </form>

      </div>
    </div>

  )
}

export default Home;
