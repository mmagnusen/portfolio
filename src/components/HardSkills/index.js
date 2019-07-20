import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './HardSkills.scss';

const HardSkills = () => (
    <ScrollableAnchor id='HardSkills'>
        <div className='HardSkills'>
            <div className='container'>
                <div className="HardSkills-title">
                    <h2 className="section-title">Hard Skills</h2>
                </div>

                <section className="HardSkills-skillsLists">
                    <div className="HardSkills-javascript" >
                        <div className="a">
                            <h3 className="HardSkills-skills">Styling with CSS</h3>
                        </div>
                        <div className="b">
                            <p>Sass</p>
                            <p>Grid</p>
                            <p>Flexbox</p>
                        </div>
                    </div>

                    <div className="HardSkills-python">
                        <div className="a">
                            <h3 className="HardSkills-skills">JavaScript</h3>
                        </div>
                        <div className="b">
                            <p>React.js, Next.js and Gatsby.js</p>
                            <p>Writing clear, maintainable code</p>
                            <p>Working with external libraries</p>
                        </div>
                    </div>

                    <div className="HardSkills-testing">
                        <div className="a">
                            <h3 className="HardSkills-skills">Testing</h3>
                        </div>
                        <div className="b">
                            <p>Testing with Jest and Enzyme</p>
                            <p>End-to-end testing with Ghost</p>
                        </div>
                    </div>

                    <div className="HardSkills-django">
                        <div className="a">
                            <h3 className="HardSkills-skills">Django</h3>
                        </div>
                        <div className="b">
                            <p>Creating APIs with Dango Rest Framework</p>
                            <p>Implementing authentication systems</p>
                            <p>Deploying backend applications</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </ScrollableAnchor>
)

export default HardSkills;