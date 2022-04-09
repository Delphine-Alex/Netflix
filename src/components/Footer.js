import React from 'react';

import Link from 'next/link'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__icons">
                <Link href="/"><a className="footer__icon"><FacebookIcon /></a></Link>
                <Link href="/"><a className="footer__icon"><InstagramIcon /></a></Link>
                <Link href="/"><a className="footer__icon"><TwitterIcon /></a></Link>
                <Link href="/"><a className="footer__icon"><YouTubeIcon /></a></Link>
            </div>

            <ul className="footer__links">
                <li className="footer__link"><Link href="/"><a>Audio and Subtitles</a></Link></li>
                <li className="footer__link"><Link href="/"><a>Audio Description</a></Link></li>
                <li className="footer__link"><Link href="/"><a>Help Center</a></Link></li>
                <li className="footer__link"><Link href="/"><a>Gift Cards</a></Link></li>
                <li className="footer__link"><Link href="/"><a>Media center</a></Link></li>
                <li className="footer__link"><Link href="/"><a>Investor Relations</a></Link></li>
                <li className="footer__link"><Link href="/"><a>Jobs</a></Link></li>
                <li className="footer__link"><Link href="/"><a>Terms of Use</a></Link></li>
                <li className="footer__link"><Link href="/"><a>Privacy</a></Link></li>
                <li className="footer__link"><Link href="/"><a>Legal Notices</a></Link></li>
                <li className="footer__link"><Link href="/"><a>Cookie Preferences</a></Link></li>
                <li className="footer__link"><Link href="/"><a>Corporate Information</a></Link></li>
                <li className="footer__link"><Link href="/"><a>Contact Us</a></Link></li>
            </ul>

            <div className="footer__copyright">
                <span>© 2021 - 2022 Netflix Clone By Delphine P.</span>
            </div>

        </div>
    );
}

export default Footer;
