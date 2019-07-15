import React, { Component } from 'react';
import { profile, SworkitBlog, SworkitShopify, SworkitHelp } from './assets';
import { Navigation } from './components'
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <main>
          <section id="first-block" class="font-colour">
                <h2 class="handwriting">Front-end Developer</h2>
          </section>

            <section id="image-div">
                <img src={profile} alt="profile" id="profile-image" />
            </section>

            <section id ="about-me" class="font-colour">
              <h2 class="handwriting">About Me</h2>
              <p>
                I'm a Front-end Developer who enjoys working on interesting
                  projects, of real value to the end-user. I work mostly with vanilla
                  JavaScript, React.js and Wordpress.
              </p>
            </section>

            <section id="background" class="font-colour">
              <h2 class="handwriting">Background</h2>
              <p>After a few stints working for different startups (Streetcar, which
                was aqcuired by Zipcar, RateSetter - one of the largest peer-to-peer
                lenders in the UK), and running my own business, I started working at
                <a href="https://marvelapp.com/" target="blank">Marvel</a>. I spent nearly two years doing everything from testing, bug
                reports, data analysis and data visualisation. The great thing about
                working in a startup is that everything is new and unchartered, meaning
                you have the opportunity to dip your hand in everything.
              </p>
              <p>
                A large portion of my time was spent working alongside the dev team,
                especially in the run-up to new releases.
                It wasn't long before I went from testing and reporting bugs, to poking around in our systems,
                then peaking under the hood and trying to learn about how things worked.
              </p>
              <p>
                I started off with Code Academy, learning the basics of HTML and CSS,
                moving on to Treehouse and using Youtube, Stack, Medium and anything
                else I could get my hands on. I found <a href="https://codebar.io/" target="blank">Codebar</a> and still religiously attend.
              </p>
            </section>

            <section id="projects" class="font-colour">
              <h2 class="handwriting">Projects</h2>
              <p>
                I'm currently working on a variety of personal and freelance projects,
                focussing on expanding my knowledge and skill-set.
              </p>

              <div id="sworkit-blog">
                <div class="project-text">
                  <h3>Sworkit Blog</h3>
                  <p>Built with the Wordpress CMS, creating a custom theme from scratch.</p>
                  <p>View site <a href="https://blog.sworkit.com/" target="blank">here</a></p>
                </div>
                <div class="project-image">
                  <a href="https://blog.sworkit.com/" target="blank"><img src={SworkitBlog} alt="Sworkit Blog Site"/></a>
                </div>
              </div>

              <div id="sworkit-shopify">
                <div class="project-text">
                    <h3>Sworkit Shopify Store</h3>
                    <p>Fully functional e-commerce site for high-growth fitness app.</p>
                    <p>View site <a href="https://store.sworkit.com/" target="blank">here</a></p>
                </div>
                <div class="project-image">
                  <a href="https://store.sworkit.com/" target="blank"><img src={SworkitShopify} alt="Sworkit Shopify Site"/></a>
                </div>
              </div>

              <div id="sworkit-help">
                <div class="project-text">
                    <h3>Sworkit Help Center</h3>
                    <p>Created with Zendesk, inline with existing brand.</p>
                    <p>View site <a href="https://help.sworkit.com/hc/en-us" target="blank">here</a></p>
                  </div>
                  <div class="project-image">
                    <a href="https://help.sworkit.com/hc/en-us" target="blank"><img src={SworkitHelp} alt="Sworkit Help Center"/></a>
                  </div>
              </div>
              

              <h3>Platfore</h3>

              <p>Platfore is a community for podcast creators.</p>
                <p>The stack: the back-end is built in Python, using the Django framework to create an API.
                  The front-end is built in React, consuming the Django API to manage authentication and data. </p>
              <p>You can view the site <a href="https://www.platfore.com/" target="blank">here.</a></p>
            </section>

            <div id="hard-skills-title">
                <h2 class="handwriting">Hard Skills</h2>
            </div>

            <section id="hard-skills">

              <div id="javascript" class="font-colour">
                  <div class="a">
                      <h3 class="skills">Vanilla JavaScript</h3>
                  </div>
                  <div class="b">
                      <p>Confident with ES6</p>
                      <p>Writing tested, maintainable code</p>
                      <p>Consuming APIs</p>
                  </div>
              </div>

              <div id="python" class="font-colour">
                  <div class="a">
                      <h3 class="skills">React.js</h3>
                  </div>
                  <div class="b">
                      <p>Next.js</p>
                      <p>Gatsby.js</p>
                      <p>Working with external libraries</p>
                  </div>
              </div>

              <div id="testing" class="font-colour">
                  <div class="a">
                      <h3 class="skills">Manual QA Testing</h3>
                  </div>
                  <div class="b">
                      <p>Devising test plans for new product releases</p>
                      <p>Comprehensive bug reports</p>
                      <p>TestFlight for iOS </p>
                  </div>
              </div>

              <div id="django" class="font-colour">
                <div class="a">
                    <h3 class="skills">Django</h3>
                </div>
                <div class="b">
                  <p>Creating APIs with Dango Rest Framework</p>
                  <p>Implementing authentication systems</p>
                  <p>Deploying</p>
                </div>
              </div>
            </section>

            <section id="soft-skills" class="font-colour">
              <h2 class="handwriting">Soft Skills</h2>
              <p>Git version control - you can find a link to my <a href="https://github.com/mmagnusen" target="blank">Github</a> profile</p>
              <p>Experience working with agile teams in sprints</p>
              <p>Comfortable with terminal and command line</p>
              <p>Atlassian - Jira issue tracking </p>
            </section>

            <section id="find-me" class="font-colour">
              <h2 class="handwriting">Find me on the web</h2>
            </section>

            <section id="external-links" class="font-colour">
                <a href="https://twitter.com/m_magnusen" target="blank">
                  <div class="dark-background">
                  <h4>Twitter</h4>
                  </div>
                </a>

                <a href="https://github.com/mmagnusen" target="blank">
                  <div class="dark-background">
                    <h4>Github</h4>
                  </div>
                </a>

                <a href="https://www.codewars.com/users/marilynmags" target="blank">
                  <div class="dark-background">
                    <h4> Codewars</h4>
                  </div>
                </a>


                <a href="https://www.platfore.com/" target="blank">
                  <div class="dark-background">
                    <h4> Platfore</h4>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/marilynmagnusen/" target="blank">
                  <div class="dark-background">
                    <h4>LinkedIn</h4>
                  </div>
                </a>

                <a href="https://medium.com/@m_magnusen" target="blank">
                  <div class="dark-background">
                    <h4>Medium</h4>
                  </div>
                </a>
            </section>
        </main>

        <footer class="font-colour">
          <h5>This site was made by hand using React and deployed on Netlify. <a href="https://github.com/mmagnusen/portfolio" target="blank">View on GitHub</a></h5>
        </footer>
      </div>
    );
  }
}

export default App;
