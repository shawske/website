// Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <a href="mailto:ryanjacobshaw@gmail.com" className="footer-link">
                <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
            <p className="footer-link">
                <FontAwesomeIcon icon={faPhone} /> 517-745-5943
            </p>
            <a href="https://www.facebook.com/ryan.shaw.52687" target="_blank" rel="noopener noreferrer" className="footer-link">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
            <a href="https://www.linkedin.com/in/ryan-shaw-39220223b/" target="_blank" rel="noopener noreferrer" className="footer-link">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
        </footer>
    );
};

export default Footer;