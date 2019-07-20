import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Link } from '../'
import { LINK_TYPE } from '../../constants/linkType';
import './SoftSkills.scss';

const SoftSkills = () => (
    <ScrollableAnchor id='SoftSkills'>
        <section className="SoftSkills">
            <div className='container'>
                <h2 className="section-title">Soft Skills</h2>
                <p>Git version control - view <Link to="https://github.com/mmagnusen" type={LINK_TYPE.EXTERNAL}>Github</Link> profile</p>
                <p>Experience working with agile teams in sprints</p>
                <p>Comfortable with command line</p>
                <p>Issue tracking in Jira</p>
            </div>
        </section>
    </ScrollableAnchor>
)

export default SoftSkills;