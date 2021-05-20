import React from 'react';

import icono from '../../assets/images/portafolio.png'

const Experience = (props) => {

    return(
        <>
        <section id = 'resume'>
            <h3 className = 'title-experiencia'>Experiencia Laboral</h3>
            <div className = 'service-bottom'>
                <div className = 'tarjeta'>
                    <div className = 'icono'>
                        <img src = {icono} />
                    </div>
                    <h2 className = 'title-empresa'>Integra Automation</h2>
                    <p className = 'text-empresa'>
                        Actualmente laborando aqui. He realizado un sistema para la evaluación de la NOM-035 dentro de la empresa,
                        desarrollado en PHP utilizando Laravel, tambien entre mis principales tareas son el levantamiento de 
                        requerimientos, análisis y diseño de bases de datos relacionales y elaboración de Interfaces Hombre - Máquina (HMI)
                    </p>
                </div>
                <div className = 'tarjeta'>
                    <div className = 'icono'>
                        <img src = {icono} />
                    </div>
                    <h2 className = 'title-empresa'>OMARXEL</h2>
                    <p className = 'text-empresa'>
                        Las tareas a realizar en esta empresa estaban orientadas hacia el lado técnico. Apoyaba en la instalación y configuración de 
                        cámaras de seguridad de circuito cerrado, así como en el mantenimiento de redes de área local (LAN). Tambien realizaba mantenimiento
                        preventivo a equipos de cómputo de la empresa.
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Experience;