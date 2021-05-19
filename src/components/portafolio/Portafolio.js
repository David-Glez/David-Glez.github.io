import React from 'react';

const Portafolio = (props) => {


    return(
        <>
        <section id = 'portfolio'>
            <div className = 'row'>
                <div className = 'twelve columns collapsed'>
                    <h1>Proyectos Recientes</h1>
                    <div id = 'portafolio-wrapper' className = 'bgrid-quarters s-bgrid-thirds cf'>
                        <div className = 'columns portafolio-item'>
                            <div className = 'item-wrap'>
                                <a href = '#modal-01' title = ''>
                                    <img scr = '' alt = '' />
                                    <div className = 'overlay'>
                                        <div className = 'portafolio-item-meta'>
                                            <h5>Coffee</h5>
                                            <p>example</p>
                                        </div>
                                    </div>
                                    <div className = 'link-icon'>
                                        <i className = 'icon-plus' />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Portafolio;