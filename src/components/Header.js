import React, { useState, useEffect } from "react";

import Image from 'next/image';
import Link from 'next/link';

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
            <img src={Netflix.src} alt="Netflix logo" className="header__logo" />
            <nav className="header__primary__navigation">
                <Link href="/browser"><a className="header__item">Home</a></Link>
                <Link href="/genre"><a className="header__item">Movies</a></Link>
                <Link href="/my-list"><a className="header__item">My List</a></Link>
                <Link href="/browser"><a className="header__responsive_item">Browse</a></Link>
            </nav>
            <div className="header__secondary__navigation">
                <Link href="/search"><a className="header__link"><SearchIcon /></a></Link>
                <div className="header__link" onClick={handleClick}><NotificationsIcon /></div>
                <Image src={Avatar} alt="Avatar" height={30} width={30} className="header__avatar" />
            </div>
            {showComponant && <LatestMovie showComponant={handleClick} />}
        </div>
    );
}

export default Header;
