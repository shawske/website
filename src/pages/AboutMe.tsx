import React from 'react';
import NavBar from './NavBar';
import GraduationImage from '../photos/graduation.jpg'; 

const AboutMe: React.FC = () => {
    return (
        <>
        <NavBar />
      
        <div className="home-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ marginRight: '50px' }}>
                <img src={GraduationImage} alt="Ryan Shaw" style={{ width: '500px', height: 'auto' }} />
            </div>
            <div>
                
                <div style={{ margin: '10px' }}>
                    <section style={{ marginBottom: '30px' }}>
                        <h2>About Me</h2>
                        <p>Welcome! I’m Ryan Shaw, a 29-year-old Marine Corps infantry veteran with a fresh and interested perspective on software engineering. 
                            My military service instilled in me a strong work ethic, discipline, and the ability to thrive in fast-paced, dynamic environments. 
                            These qualities have seamlessly translated into my academic pursuits and personal projects in the field of software engineering.

                        </p>
                        <p>
                        I recently celebrated a significant milestone in my life—graduating from the University of Michigan-Dearborn with a degree in Software Engineering. This achievement marks not just the culmination of years of study but also the beginning of a new journey into the tech industry.
                         During my studies, I have strengthened my skills in problem-solving, coding, and system design, and I'm eager to bring this knowledge to a forward-thinking team.
                        </p>
                    </section>
                    <section>
                        <h2>My Work</h2>
                        <p>In the ever-evolving world of software development, versatility is key. My professional journey has taken me through a spectrum of roles, 
                            shaping me into a well-rounded engineer with experience in both the arteries and veins of technology — the front end and back end.</p>
                        <h4>Languages</h4>
                        <p>Proficient in C++, JavaScript, Kotlin, Python, SQL, and Java, I craft dynamic solutions for both client and server sides.</p>
                        <h4>Frameworks & Platforms</h4>
                        <p>Experienced with Node.js for server-side development, React for front-end development, Spring Boot for enterprise-level applications, and Firebase for real-time databases and authentication services.</p>
                    <h4>Development Tools</h4>
                    <p>Versed in Eclipse, Visual Studio (VS) and Visual Studio Code (VSCode), Atom for coding; GitHub for version control; and Postman for API development and testing.</p>
                    </section>
                </div>
            </div>
        </div>
    </>
    );
};

export default AboutMe;
