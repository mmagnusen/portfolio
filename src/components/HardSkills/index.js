import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './HardSkills.scss';

const HardSkills = () => (
    <ScrollableAnchor id='HardSkills'>
        <div className='HardSkills'>
            <div className="HardSkills-title">
                <h2 className="handwriting">Hard Skills</h2>
            </div>

            <section id="hard-skills">

                <div className="HardSkills-javascript" >
                    <div className="a">
                        <h3 className="HardSkills-skills">Vanilla JavaScript</h3>
                    </div>
                    <div className="b">
                        <p>Confident with ES6</p>
                        <p>Writing tested, maintainable code</p>
                        <p>Consuming APIs</p>
                    </div>
                </div>

                <div className="HardSkills-python">
                    <div className="a">
                        <h3 className="HardSkills-skills">React.js</h3>
                    </div>
                    <div className="b">
                        <p>Next.js</p>
                        <p>Gatsby.js</p>
                        <p>Working with external libraries</p>
                    </div>
                </div>

                <div className="HardSkills-testing">
                    <div className="a">
                        <h3 className="HardSkills-skills">Manual QA Testing</h3>
                    </div>
                    <div className="b">
                        <p>Devising test plans for new product releases</p>
                        <p>Comprehensive bug reports</p>
                        <p>TestFlight for iOS </p>
                    </div>
                </div>

                <div className="HardSkills-django">
                    <div className="a">
                        <h3 className="HardSkills-skills">Django</h3>
                    </div>
                    <div className="b">
                        <p>Creating APIs with Dango Rest Framework</p>
                        <p>Implementing authentication systems</p>
                        <p>Deploying</p>
                    </div>
                </div>
            </section>
        </div>
    </ScrollableAnchor>
)

export default HardSkills;