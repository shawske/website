import React from 'react';
import NavBar from './NavBar';
import GraduationImage from '../photos/graduation.jpg'; // Updated path based on the directory structure.

const HobbyPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <div style={{ textAlign: 'center' }}>
                <h1>Hobbies</h1>
            </div>

        </>
    );
};

export default HobbyPage;
