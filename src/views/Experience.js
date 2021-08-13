import React from 'react';

const Experience = (props) => {

    return(
        <>
        <section id = 'experience'>
            <div className = 'row work'>
                <div className="three columns header-col">
                    <h1>
                        <span>Experiencia </span>
                    </h1>
                </div>

                <div className = 'nine columns main-col'>
                    <div className = 'row item'>
                        <div className = 'twelve columns'>
                            <h3>Integra Automation</h3>
                            <p className="info">Desarrollador web <span>&bull;</span> <em className="date">Diciembre 2019 - Presente</em></p>

                            <p>
                            Actualmente laborando aqui. He realizado un sistema para la evaluación de la NOM-035 dentro de la empresa
                            desarrollado en PHP utilizando Laravel. Tambien entre mis principales tareas son el levantamiento de 
                            requerimientos, soporte al ERP de la empresa, análisis y diseño de bases de datos relacionales y elaboración de Interfaces Hombre - Máquina (HMI)
                            </p>
                        </div>
                    </div>

                    <div className = 'row item'>
                        <div className = 'twelve columns'>
                            <h3>OMARXEL</h3>
                            <p className="info">Servicio Tecnico e instalaciones <span>&bull;</span> <em className="date">Junio 2018 - Julio 2018</em></p>

                            <p>
                            Las tareas a realizar en esta empresa estaban orientadas hacia el lado técnico. Apoyaba en la instalación y configuración de 
                            cámaras de seguridad de circuito cerrado, así como en el mantenimiento de redes de área local (LAN). Tambien realizaba mantenimiento
                            preventivo a equipos de cómputo de la empresa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Experience;