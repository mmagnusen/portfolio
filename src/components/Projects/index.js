import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Link } from '../'
import { LINK_TYPE } from '../../constants/linkType';
import { SworkitBlog, SworkitShopify, SworkitHelp } from '../../assets';
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

        <div id="sworkit-blog">
          <div className="project-text">
            <h3>Sworkit Blog</h3>
            <p>Built with the Wordpress CMS, creating a custom theme from scratch.</p>
            <p>View site <Link to="https://blog.sworkit.com/" type={LINK_TYPE.EXTERNAL}>here</Link></p>
          </div>
          <div className="project-image">
            <Link to="https://blog.sworkit.com/" type={LINK_TYPE.EXTERNAL}><img src={SworkitBlog} alt="Sworkit Blog Site"/></Link>
          </div>
        </div>

        <div id="sworkit-shopify">
          <div className="project-text">
              <h3>Sworkit Shopify Store</h3>
              <p>Fully functional e-commerce site for high-growth fitness app.</p>
              <p>View site <Link t0="https://store.sworkit.com/" type={LINK_TYPE.EXTERNAL}>here</Link></p>
          </div>
          <div className="project-image">
            <Link to="https://store.sworkit.com/"><img src={SworkitShopify} alt="Sworkit Shopify Site"/></Link>
          </div>
        </div>

        <div id="sworkit-help">
          <div className="project-text">
              <h3>Sworkit Help Center</h3>
              <p>Created with Zendesk, inline with existing brand.</p>
              <p>View site <Link to="https://help.sworkit.com/hc/en-us" type={LINK_TYPE.EXTERNAL}>here</Link></p>
            </div>
            <div className="project-image">
              <Link to="https://help.sworkit.com/hc/en-us" type={LINK_TYPE.EXTERNAL}><img src={SworkitHelp} alt="Sworkit Help Center"/></Link>
            </div>
        </div>
        
        <h3>Platfore</h3>

        <p>Platfore is a community for podcast creators.</p>
          <p>The stack: the back-end is built in Python, using the Django framework to create an API.
            The front-end is built in React, consuming the Django API to manage authentication and data. </p>
        <p>You can view the site <Link to="https://www.platfore.com/" type={LINK_TYPE.EXTERNAL}>here.</Link></p>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Projects;