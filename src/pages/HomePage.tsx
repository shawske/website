import React from 'react';
import NavBar from './NavBar';

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <div style={{ textAlign: 'center' }}>
                <h1>Ryan Shaw</h1>
            </div>
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
        </>
    );
};

export default HomePage;