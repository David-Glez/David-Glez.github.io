import React from 'react'

import { Carousel } from 'react-bootstrap';

const CarouselPortfolio = (props) => {

    const project = props.project
  
    return(
        <>
        <div className = 'project-item'>
            <div className = 'project-info'>
                <h1 id = 'project-title'>{project.projectName}</h1>
                <h2>Descripción</h2>
                <p>{project.description}</p>
                <p>Desarrollado en {project.technologies}</p>
            </div>
            <div className = 'project-carousel'>
                <Carousel fade>
                    {
                        project.images.map((item, index) => {
                            return(
                                <Carousel.Item interval={1000} key = {index}>
                                    <img
                                    className="d-block w-100"
                                    src = {item}
                                    alt="First slide"
                                    />
                                    
                                </Carousel.Item>
                            )
                        })
                    }
                    
                </Carousel>
            </div>
            
        </div>
        </>
    )
}

export default CarouselPortfolio;