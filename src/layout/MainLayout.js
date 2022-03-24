import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { useRouter } from 'next/router';

const Mainlayout = ({ children }) => {
    const router = useRouter();

    if (router.pathname != "/login" && router.pathname != "/")
        return (
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    else {
        return (
            <div>
                {children}
            </div>
        )
    };
}

export default Mainlayout;
