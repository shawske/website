import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // to determine the current route
  const isActive = (path: string) => location.pathname === path;
 

  return (
    <nav className="navbar">
      <h1 className="portfolio-title" onClick={() => navigate('/')}>
        Ryan Shaw's Portfolio
      </h1>
      <div>
        <button className={`nav-button ${isActive('/aboutme') ? 'active-link' : ''}`} onClick={() => navigate('/aboutme')}>
          About Me
        </button>
        <button className={`nav-button ${isActive('/hobbies') ? 'active-link' : ''}`} onClick={() => navigate('/hobbies')}>
          Hobbies
        </button>
        <button className={`nav-button ${isActive('/projects') ? 'active-link' : ''}`} onClick={() => navigate('/projects')}>
          Projects
        </button>
        <a href="https://www.facebook.com/ryan.shaw.52687" target="_blank" rel="noopener noreferrer" className="nav-button">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
            <a href="https://www.linkedin.com/in/ryan-shaw-39220223b/" target="_blank" rel="noopener noreferrer" className="nav-button">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
      </div>
    </nav>
  );
};

export default NavBar;
