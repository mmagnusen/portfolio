import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { profile } from '../../assets';
import './Introduction.scss';

const Introduction = () => (
    <div className='Introduction'>
        <section className="Introduction-title">
            <h2 className="handwriting">Front-end Developer</h2>
        </section>
        <section id="Introduction-profile">
            <img src={profile} alt="profile" className="Introduction-profileImage" />
        </section>
    </div>
)

export default Introduction;