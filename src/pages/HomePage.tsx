import React from 'react';
import NavBar from './NavBar';
import asdf from '../photos/asdf.jpg';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleAboutMe = () => {
        navigate('/aboutme');
    };

    return (
        <>
            <NavBar />
            <div className="home-page">
                <div>
                    <img src={asdf} alt="Ryan Shaw" style={{ width: '300px', height: 'auto', borderRadius: '50%' }} />
                </div>
                <div>
                    <h1>Hello,</h1>
                    <h1>I'm Ryan</h1>
                    <h2>Software Engineer</h2>                       
                    <h4>Hardworking recent graduate from the University of Michigan-Dearborn eager to start his professional journey in the technology sector.</h4>
                    <button onClick={handleAboutMe} className="button-style">
                        <i className="fas fa-user"></i> About Me
                    </button>
                </div>
            </div>
        </>
    );
};

export default HomePage;
