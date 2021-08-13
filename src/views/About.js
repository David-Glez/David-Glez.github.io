import React from 'react';

import picture from '../assets/images/dave.jpg';

const About = (props) => {

    return(
        <>
        <section id = 'about'>
            <div className = 'row'>
                <div className = 'three columns'>
                    <img className = "profile-pic"  src = {picture} alt="" />
                </div>
                <div className = 'nine columns main-col'>
                    <h2>Acerca de Mi</h2>
                    <p>Mi nombre es David González. Actualmente radico en la ciudad de San Luis Potosí y soy egresado del Instituto Tecnológico de
                        San Luis Potosí en la carrera de Ingeniería en Sistemas Computacionales. Programando desde los 17 años, he desarrollado en distintos 
                        lenguajes tanto en prácticas y proyectos universitarios como en la industria, siendo ejemplo de ello los lenguajes PHP, Java, JavaScript,
                        C++ y Python, y los frameworks React, Electron y Laravel.  
                        De carácter tranquilo y analitico, simepre estoy en busca de más conocimiento
                        para estar a la vanguardia en el ramo. 
                    </p>

                    <div className = 'row'>
                        <div className="columns contact-details">

                            <h2>Contacto</h2>
                            <p className="address">
                                <span>David de Jesús González González</span><br/>
                                <span>San Luis Potosí, S.L.P.</span><br/>
                                <span>(444)262-6138</span><br/>
                                <span>david.gonzalez_isc@outlook.com</span><br />
                                <span>david.gonzalez_24@outlook.com</span>
                            </p>

                        </div>

                        <div className="columns download">
                            <p>
                                <a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;