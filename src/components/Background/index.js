import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Background.scss';

const Background = () => (
    <ScrollableAnchor id='Background'>
        <section className="Background">
            <h2 className="handwriting">Background</h2>
            <p>After a few stints working for different startups (Streetcar, which
            was aqcuired by Zipcar, RateSetter - one of the largest peer-to-peer
            lenders in the UK), and running my own business, I started working at
            <a href="https://marvelapp.com/" target="blank"> Marvel</a>. I spent nearly two years doing everything from testing, bug
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
    </ScrollableAnchor>
)

export default Background;