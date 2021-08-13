import React from 'react';
import { Link } from 'react-scroll';

const Footer = (props) => {

    return(
        <>
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fa fa-skype"></i></a></li>
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