import React from 'react';

//  components
import Header from '../components/header/Header';
import About from '../components/about/About';
import Portafolio from '../components/portafolio/Portafolio';


const Home = (props) => {

  
    return(
        <>
        
        <div className = 'App' >
            <Header />
            <About />
            <Portafolio />
        </div>
        
        </>
    )
}

export default Home;