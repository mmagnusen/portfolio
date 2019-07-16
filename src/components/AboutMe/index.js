import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './AboutMe.scss';

const AboutMe = () => (
    <ScrollableAnchor id='AboutMe'>
        <section className="AboutMe">
            <h2 className="handwriting">About Me</h2>
            <p>
            I'm a Front-end Developer who enjoys working on interesting
                projects, of real value to the end-user. I work mostly with vanilla
                JavaScript, React.js and Wordpress.
            </p>
        </section>
    </ScrollableAnchor>
);

export default AboutMe;