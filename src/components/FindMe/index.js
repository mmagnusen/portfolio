import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Link } from '../'
import { LINK_TYPE } from '../../constants/linkType';
import './FindMe.scss';

const FindMe = () => (
    <ScrollableAnchor id='FindMe'>
        <div className="FindMe">
            <div className='container'>
                <section  className="FindMe-onWeb font-colour">
                    <h2 className="section-title">Find me on the web</h2>
                </section>

                <section className='FindMe-externalLinks font-colour'>
                    <Link to="https://twitter.com/m_magnusen" type={LINK_TYPE.EXTERNAL}>
                        <div className="FindMe-darkBackground">
                            <h4>Twitter</h4>
                        </div>
                    </Link>

                    <Link to="https://github.com/mmagnusen" type={LINK_TYPE.EXTERNAL}>
                        <div className="FindMe-darkBackground">
                            <h4>Github</h4>
                        </div>
                    </Link>

                    <Link to="https://www.codewars.com/users/marilynmags" type={LINK_TYPE.EXTERNAL}>
                        <div className="FindMe-darkBackground">
                            <h4> Codewars</h4>
                        </div>
                    </Link>


                    <Link to="https://www.platfore.com/" type={LINK_TYPE.EXTERNAL}>
                        <div className="FindMe-darkBackground">
                            <h4> Platfore</h4>
                        </div>
                    </Link>

                    <Link to="https://www.linkedin.com/in/marilynmagnusen/" type={LINK_TYPE.EXTERNAL}>
                        <div className="FindMe-darkBackground">
                            <h4>LinkedIn</h4>
                        </div>
                    </Link>

                    <Link to="https://medium.com/@m_magnusen" type={LINK_TYPE.EXTERNAL}>
                        <div className="FindMe-darkBackground">
                            <h4>Medium</h4>
                        </div>
                    </Link>
                </section>
            </div>
        </div>
    </ScrollableAnchor>
);

export default FindMe;