import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__icons">
                <a href="/" className="footer__icon"><FacebookIcon /></a>
                <a href="/" className="footer__icon"><InstagramIcon /></a>
                <a href="/" className="footer__icon"><TwitterIcon /></a>
                <a href="/" className="footer__icon"><YouTubeIcon /></a>
            </div>

            <ul className="footer__links">
                <li className="footer__link"><a href="/">Audio and Subtitles</a></li>
                <li className="footer__link"><a href="/">Audio Description</a></li>
                <li className="footer__link"><a href="/">Help Center</a></li>
                <li className="footer__link"><a href="/">Gift Cards</a></li>
                <li className="footer__link"><a href="/">Media center</a></li>
                <li className="footer__link"><a href="/">Investor Relations</a></li>
                <li className="footer__link"><a href="/">Jobs</a></li>
                <li className="footer__link"><a href="/">Terms of Use</a></li>
                <li className="footer__link"><a href="/">Privacy</a></li>
                <li className="footer__link"><a href="/">Legal Notices</a></li>
                <li className="footer__link"><a href="/">Cookie Preferences</a></li>
                <li className="footer__link"><a href="/">Corporate Information</a></li>
                <li className="footer__link"><a href="/">Contact Us</a></li>
            </ul>

            <div className="footer__copyright">
                <span>© 2021 - 2022 Netflix Clone By Delphine P.</span>
            </div>

        </div>
    );
}

export default Footer;
