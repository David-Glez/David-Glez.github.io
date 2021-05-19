import React from 'react';

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

        <p className = 'scrolldown'>
            <a className = 'smoothscroll' href = '#about'>
                <i className = 'icon-down-circle'></i>
            </a>
        </p>
        </>
    )
}

export default Banner;