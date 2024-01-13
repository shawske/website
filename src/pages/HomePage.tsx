import React from 'react';
import NavBar from './NavBar';
import GraduationImage from '../photos/graduation.jpg'; // Updated path based on the directory structure

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginRight: '50px' }}>
                    <img src={GraduationImage} alt="Ryan Shaw" style={{ width: '300px', height: 'auto' }} />
                </div>
                <div>
                    <h1>Ryan Shaw</h1>
                    <div style={{ margin: '50px' }}>
                        <section style={{ marginBottom: '30px' }}>
                            <h2>About Me</h2>
                            <p>...about me text...</p>
                        </section>
                        <section>
                            <h2>My Work</h2>
                            <p>...work details...</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
