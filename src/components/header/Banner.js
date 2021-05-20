import React from 'react';
import {Link} from 'react-scroll';

const Banner = (props) => {

    return(
        <>
        <div className = 'row banner'>
            <div className = 'banner-text'>
                <h1 className = 'responsive-headline'>
                    Hola, soy David González
                </h1>
                <h3>Desarrollador Web</h3>
                <hr />
                <ul className = 'social'>
                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/david-gonz%C3%A1lez-8b8a29207/">
                            <i className="fa fa-linkedin" />
                        </a>
                    </li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/David-Glez"><i className="fa fa-github" /></a></li>
                </ul>
            </div>
        </div>

        <p className = 'scrolldown cursorHover'>
            <Link 
                activeClass = 'current' 
                to = 'about'
                smooth = {true}
                spy = {true}
                offset = {0}
                duration = {750}>
                <i className = 'icon-down-circle'></i>
            </Link>
        </p>
        </>
    )
}

export default Banner;