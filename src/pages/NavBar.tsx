import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


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
      </div>
    </nav>
  );
};

export default NavBar;
