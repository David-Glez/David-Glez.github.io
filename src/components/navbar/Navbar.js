import React from 'react';
import { Link } from 'react-scroll';
import useScroll from '../../hooks/useScroll';

const Navbar = (props) => {

    const deployNav = (e) => {
        let list = document.getElementById('navegation')
        
        if(list.classList.contains('show-list')){
            list.classList.remove('show-list')
        }else{
            list.classList.add('show-list')
        }
    }

    useScroll()

    return(
        <>
        <nav id = 'navegation' className = ''>
            <button className = 'mobile-btn' onClick = {(e) => deployNav(e)}></button>
            <ul id="nav" className="">
                <li className="cursorHover">
                    <Link
                        onClick = {(e) => deployNav(e)}
                        activeClass = 'current'
                        to = 'header-main'
                        smooth = {true}
                        spy = {true}
                        offset = {0}
                        duration = {750}
                    >
                        Inicio
                    </Link>
                </li>
                <li className="cursorHover">
                    <Link
                        onClick = {(e) => deployNav(e)}
                        activeClass = 'current'
                        to = 'about'
                        smooth = {true}
                        spy = {true}
                        offset = {0}
                        duration = {750}
                    >
                        Acerca de mi
                    </Link>
                </li>
                <li className="cursorHover">
                    <Link
                        onClick = {(e) => deployNav(e)}
                        activeClass = 'current'
                        to = 'experience'
                        smooth = {true}
                        spy = {true}
                        offset = {0}
                        duration = {750}
                    >
                        Mi Experiencia
                    </Link>
                </li>
                <li className="cursorHover">
                    <Link
                        onClick = {(e) => deployNav(e)}
                        activeClass = 'current'
                        to = 'portfolio'
                        smooth = {true}
                        spy = {true}
                        offset = {0}
                        duration = {750}
                    >
                        Portafolio
                    </Link>
                </li>
                <li className="cursorHover">
                    <Link
                        onClick = {(e) => deployNav(e)}
                        activeClass = 'current'
                        to = 'contact'
                        smooth = {true}
                        spy = {true}
                        offset = {0}
                        duration = {750}
                    >
                        Contacto
                    </Link>
                </li>
            </ul> 
        </nav>
        </>
    )
}

export default Navbar;