import React from 'react';

import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {

    return(
        <>
        <header id = 'home'> 
            <Navbar />
            <Banner />
        </header>
        </>
    )
};

export default Header;