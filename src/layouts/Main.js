import React from 'react';

import Greetings from '../views/Greetings';
import About from '../views/About';
import Experience from '../views/Experience';
import Footer from '../views/Footer';
import Portafolio from '../views/Portafolio';

//  custom hook
import useResize from '../hooks/useResize';

const Main = (props) => {

    const [width, height] = useResize();

    return(
        <>
        <Greetings height = {height} />
        <About />
        <Experience />
        <Portafolio />
        <Footer />
        </>
    );
}

export default Main;