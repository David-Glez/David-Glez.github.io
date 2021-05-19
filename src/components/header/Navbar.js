import React from 'react';

import {Link} from 'react-scroll';

const Navbar = (props) => {


    //  TODO: revisar el boton para desplegar las opciones en el modo tablet
    
        return(
        <nav id = 'nav-wrap'>
            <a className = 'mobile-btn' href = '#nav-wrap' title = 'Show navigation'>
                Show navigation
            </a>
            <a className = 'mobile-btn' href = '#' title = 'Hide navigation'>
                Hide navigation
            </a> 


            <ul id = 'nav' className = 'nav'>
                <li className = 'cursorHover'>
                    <Link
                        activeClass = 'current' 
                        to = 'home'
                        smooth = {true}
                        spy = {true}
                        offset = {0}
                        duration = {750}>
                        Home
                    </Link>
                </li>
                <li className = 'cursorHover'>
                    <Link
                        activeClass = 'current'
                        to = 'about'
                        smooth = {true}
                        spy = {true}
                        offset = {0}
                        duration = {750}>
                        Acerca de mi
                    </Link>
                </li>
                <li className = {(location.pathname == '/experience') ? 'current' : ''}>
                    <a className = 'smoothscroll' href = '#experience'>
                        Experiencia
                    </a>
                </li>
                <li className = {(location.pathname == '/projects') ? 'current' : ''}>
                    <a className = 'smoothscroll' href = '#projects'>
                        Proyectos
                    </a>
                </li>
                <li className = {(location.pathname == '/contact') ? 'current' : ''}>
                    <a className = 'smoothscroll' href = '#contact'>
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;