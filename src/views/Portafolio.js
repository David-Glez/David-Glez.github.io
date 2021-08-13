import React, {useState} from 'react';

//  imagenes de hmi roboshot
import roboshotHome from '../assets/images/portafolio/roboshot-home.PNG'
import roboshotPanel from '../assets/images/portafolio/roboshot-panel.PNG'
import roboshotPersonalizada from '../assets/images/portafolio/roboshot-personalizada.PNG'
import roboshotPosiciones from '../assets/images/portafolio/roboshot-posiciones.PNG'

//  imagenes de robo API
import roboAPIHome from '../assets/images/portafolio/RoboAPI-home.PNG'
import roboAPIRecetas from '../assets/images/portafolio/RoboAPI - recetas.PNG'

//  imagenes para HMI SCARA
import hmiHome from '../assets/images/portafolio/HMI-home.PNG'
import hmiMaintenance from '../assets/images/portafolio/HMI-maintenance.PNG'
import hmiSensors from '../assets/images/portafolio/HMI-sensors.PNG'

//  imagenes para NOM-035 
import nomHome from '../assets/images/portafolio/nom-home.PNG'
import nomPermisos from '../assets/images/portafolio/nom-permisos.PNG'
import nomPregunta from '../assets/images/portafolio/nom-pregunta.PNG'
import nomResultado from '../assets/images/portafolio/nom-resultado.PNG'
import nomUsuarios from '../assets/images/portafolio/nom-usuarios.PNG' 

//  tarjeta de cada proyecto
import CarouselPortfolio from '../components/carousel/Carousel';


const Portafolio = (props) => {

    const [data, setData] = useState([
        {
            projectName: 'Roboshot',
            description: 'HMI para un robot de tipo SCARA el cual esta destinado a servir bebidas alcoholicas y sin alcohol, ya sea de alguna receta predeterminada o personalizada por el usuario. Es capaz de mostrar el catálogo disponible de bebidas, visualizar y calibrar ingredientes asi como su disponibilidad, hacer cobros en efectivo, generar reportes de ventas en formatos Excel y PDF y escanear códigos QR de pedidos realizados mediente la plataforma web desarrollada en conjunto.',
            technologies: 'Electron JS, Node JS, Knockout JS, Laravel 6, PostgreSQL, Bootstrap y CSS',
            images: [
                roboshotHome,
                roboshotPanel,
                roboshotPersonalizada,
                roboshotPosiciones
            ]
        },{
            projectName: 'Robo API',
            description: 'API desarrollada en conjunto con la plataforma del ROBOSHOT, para funcionamiento de pedidos en linea. Obtiene la receta que solicite el usuario mediante el código QR previamente registrado, este se escanea en la estación física y sirve dicha bebida. Además, tambien sirve de datos a la plataforma en linea con los datos del clientes dueños de la estación ROBOSHOT y de los consumidores.',
            technologies: 'Laravel 6 y PostgreSQL autenticado con Laravel Passport y utilizada con Axios, Ajax y Postman. Plataforma web creada con React JS, Bootstrap 4.6 y CSS',
            images: [
                roboAPIHome,
                roboAPIRecetas
            ]
        },{
            projectName: 'HMI SCARA',
            description: 'HMI para el control de un robot tipo SCARA. Este cuenta con un sistema de monitoreo en tiempo real de los sensores que contiene, además de que permite la ejecución de movimientos utilizando trayectorias predefinidas. Aplicación aún en desarrollo.',
            technologies: 'Electron JS, Node JS, Knockout JS y SQLite',
            images: [
                hmiHome,
                hmiMaintenance,
                hmiSensors
            ]
        },{
            projectName: 'NOM 035',
            description: 'Implementada por la Secretaría del Trabajo y Previsión Social, sirve para medir el nivel de estrés en los trabajadores de una empresa. Este sistema ayuda a las empresas a su aplicación dentro o fuera de la empresa, generando los reportes y gráficas de los resultados obtenidos en un formato PDF, de acuerdo a lo establecido en el Diario Oficial de la Federación. Es adaptable al organigrama de la empresa, además de que maneja roles y permisos de usuarios. Cuenta tambien con un control de encuestas, en el cual se permite la activación de estas en periodos de tiempo definidos por el usuario.',
            technologies: 'Laravel 7, JavaScript, Ajax, DomPDF y PostgreSQL. Desplegado sobre servidor Windows Server 2008 propio de la empresa',
            images: [
                nomHome,
                nomPermisos,
                nomPregunta,
                nomResultado,
                nomUsuarios
            ]
        },
    ])

    return(
        <>
        <section id = 'portfolio'>
            <div className = 'row'>
                <h1>Portafolio</h1>
            </div>

            <div className = 'projects'>
                {data.map((item, index) => {
                    return(
                        <CarouselPortfolio key= {index} project = {item} />
                    )
                })}

                {/* <div className = 'project-item'>
                    <div className = 'project-info'>
                        <h1 id = 'project-title'>Prueba</h1>
                        <h2>Descripción</h2>
                        <p>Esta es una prueba de carrusel para los proyectos que se han realizado</p>
                    </div>
                    <div className = 'project-carousel'>
                        <Carousel fade>
                            <Carousel.Item interval={500}>
                                <img
                                className="d-block w-100"
                                src = {nom1}
                                alt="First slide"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                className="d-block w-100"
                                src = {nom2}
                                alt="Second slide"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src = {nom3}
                                alt="Third slide"
                                />
                                
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    
                </div>

                <div className = 'project-item'>
                    <div className = 'project-info'>
                        <h1 id = 'project-title'>Prueba</h1>
                        <h2>Descripción</h2>
                        <p>Esta es una prueba de carrusel para los proyectos que se han realizado</p>
                    </div>
                    <div className = 'project-carousel'>
                        <Carousel fade>
                            <Carousel.Item interval={500}>
                                <img
                                className="d-block w-100"
                                src = {nom1}
                                alt="First slide"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                className="d-block w-100"
                                src = {nom2}
                                alt="Second slide"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src = {nom3}
                                alt="Third slide"
                                />
                                
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    
                </div> */}
            </div>
        </section>
        </>
    )
}

export default Portafolio;