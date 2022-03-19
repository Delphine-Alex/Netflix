import React from "react";

import Image from 'next/image';

import avatar from "../public/assets/avatar.png";
import netflix from "../public/assets/netflix_logo.png";

import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <header className="header">
            <Image src={netflix} alt="Netflix logo" className="header__logo" height={70} width={120} />
            <nav className="header__primary__navigation">
                <a href="/" className="header__item">Home</a>
                <a href="/" className="header__item">Movies</a>
                <a href="/" className="header__item">New & Popular</a>
                <a href="/" className="header__item">My List</a>
            </nav>
            <div className="header__secondary__navigation">
                <a href="/" className="header__link"><SearchIcon /></a>
                <a href="/" className="header__link"><NotificationsIcon /></a>
                <Image src={avatar} alt="Avatar" height={30} width={30} className="header__avatar" />
            </div>

        </header>
    );
}

export default Header;
