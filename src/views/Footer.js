import React from 'react';
import { Link } from 'react-scroll';

const Footer = (props) => {

    return(
        <>
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/david-gonz%C3%A1lez-8b8a29207/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/David-Glez"><i className="fa fa-github" /></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Copyright 2021 DG</li>  
                    </ul>
                </div>
                <div id="go-top">
                    <Link
                        style = {{cursor: 'pointer'}}
                        to = 'header-main'
                        smooth = {true}
                        duration = {750}
                    >
                        <i className="icon-up-open"></i>
                    </Link>
                    
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;