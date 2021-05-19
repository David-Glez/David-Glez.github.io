import React from 'react';

import imgProfile from '../../assets/images/dave.jpg';
import curriculum from '../../assets/cv/CV David Gonzalez.pdf';

const About = (props) => {

    return(
        <>
        <section id = 'about'>
            <div className = 'row'>
                <div className = 'three columns'>
                    <img className = 'profile-pic' src = {imgProfile} alt = '' />
                </div>
                <div className = 'nine columns main-col'>
                    <h2>Acerca de mi</h2>
                    <p>
                        Aqui va mi descripcion
                    </p>
                    <div className = 'row'>
                        <div className = 'columns contact-details'>
                            <h2>
                                Contacto
                            </h2>
                            <p className = 'address'>
                                <span>David de Jesús González González</span>
                                <br />
                                <span>San Luis Potosí, S.L.P.</span>
                                <br />
                                <span>(444)262-6138</span>
                                <br />
                                <span>david.gonzalez_isc@outlook.com</span>
                            </p>
                        </div>
                        <div className = 'columns download'>
                            <p>
                                <a className = 'button' href = {curriculum} download = 'CV David Gonzalez.pdf'>
                                    <i className = 'fa fa-download'></i>
                                    Descargar CV
                                </a>
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