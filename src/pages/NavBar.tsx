import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const portfolioStyle = {
    fontSize: '24px', // Adjust the size as needed
  };

  const buttonStyle = {
    margin: '0 10px', // Adjust the margin as needed
  };

  const handleHobbies = () => {
    navigate('/hobbies');
  };

  const handleProjects = () => {
    navigate('/projects');
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleAboutMe = () => {
    navigate('/aboutme');
  };

  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h1>
          <button className="nav-button" onClick={handleHome} style={portfolioStyle}>
            Ryan Shaw's Portfolio
          </button>
        </h1>
      </div>
      <div>
        <button className="nav-button" onClick={handleHobbies} style={buttonStyle}>Hobbies</button>
        <button className="nav-button" onClick={handleProjects} style={buttonStyle}>Projects</button>
        <button className="nav-button" onClick={handleAboutMe} style={buttonStyle}>About Me</button>
      </div>
    </nav>
  );
};

export default NavBar;
