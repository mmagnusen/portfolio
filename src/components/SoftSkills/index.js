import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './SoftSkills.scss';

const SoftSkills = () => (
    <ScrollableAnchor id='SoftSkills'>
        <section className="SoftSkills">
            <div className='container'>
                <h2 className="section-title">Soft Skills</h2>
                <p>Git version control - you can find a link to my <a href="https://github.com/mmagnusen" target="blank">Github</a> profile</p>
                <p>Experience working with agile teams in sprints</p>
                <p>Comfortable with terminal and command line</p>
                <p>Atlassian - Jira issue tracking </p>
            </div>
        </section>
    </ScrollableAnchor>
)

export default SoftSkills;