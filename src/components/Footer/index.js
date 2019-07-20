import React from 'react';
import { Link } from '../'
import { LINK_TYPE } from '../../constants/linkType';
import './Footer.scss';

const Footer = () => (
    <footer className="Footer">
        <div className='container'>
            <h5>This site was made by hand using React and deployed on Netlify. <Link to="https://github.com/mmagnusen/portfolio" type={LINK_TYPE.EXTERNAL}>View on GitHub</Link></h5>
        </div>
    </footer>
)

export default Footer;