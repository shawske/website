import React from 'react';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();

  const handleHobbies = () => {
    navigate('/hobbies');
  };

  const handleProjects = () => {
    navigate('/projects');
  }
  return (
    <nav className="navbar">
      <button className="nav-button" onClick={handleHobbies}>Hobbies</button>
      <h1 className="nav-title">Ryan Shaw's Portfolio</h1>
      <button className="nav-button" onClick={handleProjects}>Projects</button>
    </nav>
  );
};

export default NavBar;