import React from 'react';
import NavBar from './NavBar';
import GraduationImage from '../photos/graduation.jpg'; // Updated path based on the directory structure.

const AboutMe: React.FC = () => {
    return (
        <>
            <NavBar />
            <div style={{ textAlign: 'center' }}>
                <h1>About Me</h1>
            </div>

        </>
    );
};

export default AboutMe;
