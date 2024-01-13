import React from 'react';
import NavBar from './NavBar';
import '../App.css';
import Footer from './Footer';

const ProjectsPage: React.FC = () => {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <NavBar />
            <div className="home-page" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                <h1>Projects</h1>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    {/* Project Card 1 */}
                    <div className="project-card">
                        <h3>Project Title 1</h3>
                        <p>Short description of the project goes here. It can be two or three sentences long.</p>
                        <button onClick={() => openInNewTab('/')} className="button-style">Check it out!</button>
                    </div>
                    {/* Repeat for other cards, applying the 'project-card' class */}
                    {/* Card 2 */}
                    <div className="project-card">
                        <h3>Members Voting App</h3>
                        <p>A web application built for a client over 8 months with a team of 4...</p>
                        <button disabled onClick={() => openInNewTab('https://github.com/shawske/paper-review')} className="button-style">Coming Soon!</button>
                    </div>
                    {/* Card 3 */}
                    <div className="project-card">
                        <h3>Paper Review System</h3>
                        <p>A web application I built myself also with a firebase backend...</p>
                        <button onClick={() => openInNewTab('https://github.com/shawske/paper-review')} className="button-style">Check it out!</button>
                    </div>
                    {/* Card 4 */}
                    <div className="project-card">
                        <h3>Design Pattern Tiny Tool</h3>
                        <p>This was built for users to create design patterns...</p>
                        <button onClick={() => openInNewTab('https://github.com/shawske/TinyTool')} className="button-style">Check it out!</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectsPage;
