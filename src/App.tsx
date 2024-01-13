import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './NavBar.css';
import HomePage from './pages/HomePage';
import HobbyPage from './pages/HobbyPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hobbies" element ={<HobbyPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
