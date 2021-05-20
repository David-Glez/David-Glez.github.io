import React from 'react';

//  components
import Header from '../components/header/Header';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Portafolio from '../components/portafolio/Portafolio';
import Footer from '../components/footer/Footer';

const Home = (props) => {

    return(
        <>
        <div className = 'App'>
            <Header />
            <About />
            <Experience />
            <Portafolio />
            <Footer />
        </div>
        </>
    )
}

export default Home;