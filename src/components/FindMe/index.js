import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './FindMe.scss';

const FindMe = () => (
    <ScrollableAnchor id='FindMe'>
        <div className="FindMe">
            <div className='container'>
                <section  className="FindMe-onWeb font-colour">
                    <h2 className="section-title">Find me on the web</h2>
                </section>

                <section className='FindMe-externalLinks font-colour'>
                    <a href="https://twitter.com/m_magnusen" target="blank">
                        <div className="FindMe-darkBackground">
                        <h4>Twitter</h4>
                        </div>
                    </a>

                    <a href="https://github.com/mmagnusen" target="blank">
                        <div className="FindMe-darkBackground">
                        <h4>Github</h4>
                        </div>
                    </a>

                    <a href="https://www.codewars.com/users/marilynmags" target="blank">
                        <div className="FindMe-darkBackground">
                        <h4> Codewars</h4>
                        </div>
                    </a>


                    <a href="https://www.platfore.com/" target="blank">
                        <div className="FindMe-darkBackground">
                        <h4> Platfore</h4>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/marilynmagnusen/" target="blank">
                        <div className="FindMe-darkBackground">
                        <h4>LinkedIn</h4>
                        </div>
                    </a>

                    <a href="https://medium.com/@m_magnusen" target="blank">
                        <div className="FindMe-darkBackground">
                        <h4>Medium</h4>
                        </div>
                    </a>
                </section>
            </div>
        </div>
    </ScrollableAnchor>
);

export default FindMe;