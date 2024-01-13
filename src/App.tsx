import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './NavBar.css';
import HomePage from './pages/HomePage';
import HobbyPage from './pages/HobbyPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutMe from './pages/AboutMe';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hobbies" element ={<HobbyPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
      </Routes>
    </Router>
  );
};

export default App;
