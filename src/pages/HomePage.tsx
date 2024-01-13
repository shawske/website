import React from 'react';
import NavBar from './NavBar';
import asdf from '../photos/asdf.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    

      const handleAboutMe = () => {
        navigate('/aboutme');
      };
      const buttonStyle = {
        margin: '0 10px',
        backgroundColor: '#4CAF50', // Example background color
        color: 'white', // Example text color
        padding: '10px 20px', // Example padding
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        // Add more styling as needed
      };
    
    return (
        <>
            <NavBar />
            <div className="home-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginRight: '50px' }}>
                    <img src={asdf} alt="Ryan Shaw" style={{ width: '500px', height: 'auto' }} />
                </div>
                <div>
                    
                    <div style={{ margin: '10px' }}>
                        <section style={{ marginBottom: '30px' }}>
                            <h1>Hello,</h1>
                            <h1>I'm Ryan</h1>                       
                        </section>
                        <section>
                            <h1>Software Engineer</h1>
                            
                        <h4>Hardworking recent graduate from the Univeristy of Michigan-Dearborn eager to start his professional journey in the technology sector </h4>
                        <p>Learn more about me! <button onClick={handleAboutMe} style={buttonStyle}>About Me</button></p>
    
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
