import React from 'react';
import NavBar from './NavBar';
import Golf from '../photos/golf.jpg'; 
import Hockey from '../photos/hockey.jpg'
import Footer from './Footer';

const HobbyPage: React.FC = () => {
    return (
        <>
        <NavBar />
      
        <div className="home-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ marginRight: '50px', marginLeft: '100px' }}>
                <img src={Golf} alt="Ryan Shaw" style={{ width: '300px', height: 'auto' }} />
                <img src={Hockey} alt="Ryan Shaw" style={{ width: '300px', height: 'auto' }} />
            </div>
            <div>
                
                <div style={{ margin: '10px' }}>
                    <section style={{ marginBottom: '30px' }}>
                        <h2>Sports</h2>
                        <p>{'\u00A0\u00A0\u00A0\u00A0'}My entire life I have been playing sports.  I started with golf and hockey when I was young.  I played hockey at a higher level when I reached highschool
                        and eventually played in college for a year before joining the Marine Corps.  I still love to play hockey every week in the mens league during the winter.  I also still play golf once 
                        a week in the summer in a league.  

                        </p>
                        <p style={{marginTop:'10px'}}>
                        {'\u00A0\u00A0\u00A0\u00A0'} I learned a ton while playing hockey for all those years, both in working on teams and being a leader.  I was the captain of my hockey teams for as long as I can remember,
                        and I loved pushing the guys to get the most out of them every week.  I think the lessons I learned playing hockey even rival the lessons I learned in the Marine Corps.
                        </p>
                    </section>
                    <section>
                    <h2>Sports Fan</h2>
    <p>{'\u00A0\u00A0\u00A0\u00A0'}As much as I enjoy playing sports, I enjoy watching the professionals do it just as much.  For my birthday most years, my wife and I will take a trip to detroit
    and watch a Red Wings game in person.  We love the new arena, even though we both still miss the Joe!  I am also a Michigan football fan, and I can't leave out that we are National Champions now too!
    And this year is also a big year for the Detroit Lions.  I, along with many others, have been through it all with the Lions and I am hoping for a good playoffs finish this year!</p>
   
                    </section>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    );
};

export default HobbyPage;