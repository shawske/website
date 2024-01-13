import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
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
                    <div className="project-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '250px' }}>
                        <div>
                            <h3>Project Title 1</h3>
                            <p>Short description of the project goes here. It can be two or three sentences long.</p>
                        </div>
                        <button onClick={() => openInNewTab('/')} className="button-style">Check it out!</button>
                    </div>
                    {/* Card 2 */}
                    <div style={{ width: '200px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                        <h3>Members Voting App</h3>
                        <p style={{marginBottom: '30px'}}>A web application built for a client over 8 months with a team of 4.  We used React with node.js and firebase for the backend.  This was a large project and real scenario which was a great experience.</p>
                        <button disabled onClick={() => openInNewTab('https://github.com/shawske/paper-review')} className="button-style">Coming Soon!</button>
                    </div>
                    {/* Card 3 */}
                    <div style={{ width: '200px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                        <h3>Paper Review System</h3>
                        <p style={{marginBottom: '30px'}}>A web application I built myself also with a firebase backend. This web application was designed for conferences to have their papers submitted and reviewed by seperate reviewers with those being approved or denied..</p>
                        <button onClick={() => openInNewTab('https://github.com/shawske/paper-review')} className="button-style">Check it out!</button>
                    </div>
                    {/* Card 4 */}
                    <div style={{ width: '200px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                        <h3>Design Pattern Tiny Tool</h3>
                        <p style={{marginBottom: '30px'}}>This was built for users to create design patterns by answering a series of questions.  The patterns would then be generated and stored in a database</p>
                        <button onClick={() => openInNewTab('https://github.com/shawske/TinyTool')} className="button-style">Check it out!</button>
                    </div>
                </div>
            </div>
<Footer/>
        </>
    );
};

export default ProjectsPage;