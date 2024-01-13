import React from 'react';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  return (
    <nav className="navbar">
      <button className="nav-button" onClick={handleLogout}>Hobbys</button>
      <h1 className="nav-title">Ryan Shaw's Portfolio</h1>
      <button className="nav-button" onClick={handleLogout}>Projects</button>
    </nav>
  );
};

export default NavBar;