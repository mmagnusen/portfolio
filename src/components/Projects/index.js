import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Link } from '../'
import { LINK_TYPE } from '../../constants/linkType';
import { SworkitShopify } from '../../assets';
import './Projects.scss';

const Projects = () => (
  <ScrollableAnchor id='Projects'>
    <section className="Projects">
      <div className='container'>

        <h2 className="section-title">Projects</h2>
        <p>
          I'm currently working on a variety of personal and freelance projects,
          focussing on expanding my knowledge and skill-set.
        </p>

        <div className="sworkit-shopify">
          <div className="project-text">
              <h3>Sworkit Shopify Store</h3>
              <p>Fully functional e-commerce site for high-growth fitness app.</p>
              <p>View site <Link to="https://store.sworkit.com/" type={LINK_TYPE.EXTERNAL}>here</Link></p>
          </div>
          <div className="project-image">
            <Link to="https://store.sworkit.com/"><img src={SworkitShopify} alt="Sworkit Shopify Site"/></Link>
          </div>
        </div>
        
        <div className='Projects-personal'>
          <h3>Casperly</h3>
          <p>Casperly is a website for food lovers to find and book restaurants in Manchester.</p>
            <p>The stack: the back-end is built in Python, using the Django framework to create an API.
              The front-end is built in React, consuming the Django API to manage authentication and data. </p>
          <p>You can view the site <Link to="https://www.casperly.com/" type={LINK_TYPE.EXTERNAL}>here.</Link></p>
        </div>

        <div className='Projects-personal'>
          <h3>Clearli</h3>
          <p>A resource for Developers to learn and practice testing front-end applications.</p>
          <p>Built with React.js.</p>
          <p>You can view the site <Link to="clearli.netlify.com" type={LINK_TYPE.EXTERNAL}>here.</Link></p>
        </div>

      </div>
    </section>
  </ScrollableAnchor>
);

export default Projects;