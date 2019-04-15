import React, { Component } from 'react';
import profile from './assets/profile.jpg'
import sworkitBlog from './assets/sworkit-blog.png'
import sworkitShopify from './assets/sworkit-shopify.png'
import sworkitHelp from './assets/sworkit-help.png'
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="title-div">
      <h1> Marilyn Magnusen</h1>
    </div>

    <main>
        <section id="first-block" class="font-colour">
            <h2 class="handwriting">Front-end Developer</h2>
        </section>

        <section id="image-div">
            <img src={profile} alt="picture" id="profile-image" />
        </section>

        <section id ="about-me" class="font-colour">
          <h2 class="handwriting">About Me</h2>
          <p>
            I'm a Front-end Developer who enjoys working on interesting
              projects, of real value to the end-user. I work mostly with vanilla
              JavaScript, React.js and Wordpress.
          </p>
          <p>

          </p>
        </section>

        <section id="background" class="font-colour">
          <h2 class="handwriting">Background</h2>
          <p>After a few stints working for different startups (Streetcar, which
            was aqcuired by Zipcar, RateSetter - one of the largest peer-to-peer
            lenders in the UK), and running my own business, I started working at
            <a href="https://marvelapp.com/">Marvel</a>. I spent nearly two years doing everything from testing, bug
            reports, data analysis and data visualisation. The great thing about
            working in a startup is that everything is new and unchartered, meaning
            you have the opportunity to dip your hand in everything.
          </p>
          <p>
            A large portion of my time was spent working alongside the dev team,
            especially in the run-up to new releases.
            It wasn't long before I went from testing and reporting bugs, to poking around in our systems,
            then peaking under the hood and trying to learn about how things actually worked.
          </p>
          <p>
            I started off with Code Academy, learning the basics of HTML and CSS,
            moving onto Treehouse and using Youtube, Stack, Medium and anything
            else I could get my hands on. I found <a href="https://codebar.io/">Codebar</a> and still religiously attend.
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
              <p>Built with the Wordpress CMS, creating a custom theme from scratch. Current on-going project.</p>
              <p>View site <a href="https://blog.sworkit.com/">here</a></p>
            </div>
            <div class="project-image">
              <a href="https://blog.sworkit.com/"><img src={sworkitBlog}/></a>
            </div>
          </div>

          <div id="sworkit-shopify">
            <div class="project-text">
                <h3>Sworkit Shopify Store</h3>
                <p>Fully functional ecommerce site for high-growth fitness app.</p>
                <p>View site <a href="https://store.sworkit.com/">here</a></p>
            </div>
            <div class="project-image">
              <a href="https://store.sworkit.com/"><img src={sworkitShopify}/></a>
            </div>
          </div>

          <div id="sworkit-help">
            <div class="project-text">
                <h3>Sworkit Help Center</h3>
                <p>Created with Zendesk, inline with existing brand.</p>
                <p>View site <a href="https://help.sworkit.com/hc/en-us">here</a></p>
              </div>
              <div class="project-image">
                <a href="https://help.sworkit.com/hc/en-us"><img src={sworkitHelp}/></a>
              </div>
          </div>
          

          <h3>The Next Step</h3>

          <p>The Next Step is a jobs listing site for Developers.</p>
            <p>The stack: the backend is built in Python, using the Django framework to create an API.
              The front-end is built in React, consuming the Django API to manage authentication and data. </p>
          <p>You can view the repo for it <a href="https://github.com/mmagnusen/nextstep-react" target="blank">here</a>
            or view the prototype <a href="http://www.thenextstep.io/" target="blank">here.</a></p>
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
                  <p>Core javascript</p>
                  <p>Working with contenteditable attribute</p>
                  <p>Simple unit tests with Jasmine</p>
              </div>
          </div>

          <div id="python" class="font-colour">
              <div class="a">
                  <h3 class="skills">React.js</h3>
              </div>
              <div class="b">
                  <p>React Router</p>
                  <p>Consuming APIs</p>
                  <p>External Libraries</p>
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
              <p>Creating APIs with serializers</p>
              <p>Templates, views & url patterns</p>
              <p>Custom models</p>
            </div>
          </div>
        </section>

        <section id="soft-skills" class="font-colour">
          <h2 class="handwriting">Soft Skills</h2>
          <p>Git version control - you can find a link to my <a href="https://github.com/mmagnusen">Github</a> profile</p>
          <p>Experience working with agile teams in sprints</p>
          <p>Comfortable with terminal and command line</p>
          <p>Atlassian - Jira issue tracking </p>
        </section>

        <section id="find-me" class="font-colour">
          <h2 class="handwriting">Find me on the web</h2>
        </section>

        <section id="external-links" class="font-colour">
            <a href="https://twitter.com/m_magnusen">
              <div class="dark-background">
              <h4>Twitter</h4>
              </div>
            </a>

            <a href="https://github.com/mmagnusen">
              <div class="dark-background">
                <h4>Github</h4>
              </div>
            </a>

            <a href="https://www.codewars.com/users/marilynmags">
              <div class="dark-background">
                <h4> Codewars</h4>
              </div>
            </a>


            <a href="https://www.thenextstep.io">
              <div class="dark-background">
                <h4> The Next Step</h4>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/marilynmagnusen/">
              <div class="dark-background">
                <h4>LinkedIn</h4>
              </div>
            </a>

            <a href="https://medium.com/@m_magnusen">
              <div class="dark-background">
                <h4>Medium</h4>
              </div>
            </a>
        </section>
    </main>

    <footer class="font-colour">
      <h5>This site was made by hand, using plain HTML and Sass CSS. <a href="https://github.com/mmagnusen/portfolio" target="blank">View on GitHub</a></h5>
    </footer>
      </div>
    );
  }
}

export default App;