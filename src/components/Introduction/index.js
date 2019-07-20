import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { profile } from '../../assets';
import './Introduction.scss';

const Introduction = () => (
    <div className='IntroductionContainer'>
        <div className='container'>
            <div className='Introduction'>
                <section className="Introduction-profile">
                    <img src={profile} alt="profile" className="Introduction-profileImage" />
                </section>
            </div>
            <ScrollableAnchor id='AboutMe'>
                <section className="AboutMe">
                    <h2 className="section-title">Front-end Developer</h2>
                    <p>
                    I'm a Front-end Developer who enjoys working on interesting
                        projects, of real value to the end-user. I work mostly with vanilla
                        JavaScript, React.js and Wordpress.
                    </p>
                </section>
            </ScrollableAnchor>
        </div>
    </div>
)

export default Introduction;