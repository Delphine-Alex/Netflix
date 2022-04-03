import React, { useState, useEffect } from "react";

import Image from 'next/image';

import Avatar from "../public/assets/avatar.png";
import LatestMovie from "./LatestMovie";
import Netflix from "../public/assets/netflix_logo.png";

import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const [scroll, setScroll] = useState("transparent");
    const [showComponant, setShowComponant] = useState(false);

    const handleClick = () => {
        setShowComponant((showComponant) => !showComponant);
    };

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setScroll("#141414") : setScroll("transparent");
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div className="header" style={{ backgroundColor: scroll, transition: "all 1s" }}>
            <Image src={Netflix} alt="Netflix logo" className="header__logo" height={70} width={120} />
            <nav className="header__primary__navigation">
                <a href="/browser" className="header__item">Home</a>
                <a href="/genre" className="header__item">Movies</a>
                <a href="/my-list" className="header__item">My List</a>
                <a href="/browser" className="header__responsive_item">Browse</a>
            </nav>
            <div className="header__secondary__navigation">
                <a href="/search" className="header__link"><SearchIcon /></a>
                <a className="header__link" onClick={handleClick}><NotificationsIcon /></a>
                <Image src={Avatar} alt="Avatar" height={30} width={30} className="header__avatar" />
            </div>
            {showComponant && <LatestMovie showComponant={handleClick} />}
        </div>
    );
}

export default Header;
