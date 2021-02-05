import React from 'react';
import Nav from '../Nav';
import TradeTracker from '../../images/trade-tracker-preview.png';
import Billing1 from '../../images/billing-ss1.png';
import Billing2 from '../../images/billing-ss2.png';
import Soapstone from '../../images/soapstone.jpg';
import Creddit from '../../images/creddit-screen1.png';
import Creddit2 from '../../images/creddit-screen2.png';
import './Projects.css';

const Projects = () => {
  document.body.classList.remove('red-bg');
  return (
      <div className="projects">
        <Nav title="Projects" />
        <div className="projects-section">
            <div className="project-container">
                <p className="project-title">Collection Billing Website:</p>
                <a href="https://zen-darwin-e85c13.netlify.app/" rel="noopener noreferrer" target="_blank"><img src={Billing1} alt="Billing Site" className="project-pic" /></a><br />
                <a href="https://zen-darwin-e85c13.netlify.app/" rel="noopener noreferrer" target="_blank"><img src={Billing2} alt="Billing Site" className="project-pic" /></a><br />
                <div className="project-desc">
                    <p className="project-bio">A collection agency website, a demo of an app I created for a client. Built with Node.js, Express, MongoDB, and React. Try out admin abilities with username: guest@guest.com password: guestpass1.</p>
                    <p>Features:</p>
                    <ul>
                        <li>Full admin-only functionality</li>
                        <li>Scan PDF info to AWS S3 Bucket and add time-stamped notes to each collection</li>
                        <li>Alerts on homepage for upcoming client reminders</li>
                        <li>Generate an invoice letter to send clients based off of collection information- ready to print and address fits in an open envelope.</li>
                        <li>Various filters for collection search</li>
                    </ul>
                </div>
                <div className="btn-container">
                    <a className="nav-btn-inverted" href="https://zen-darwin-e85c13.netlify.app/" rel="noopener noreferrer" target="_blank">View Demo</a>
                    <a className="nav-btn-inverted" href="https://github.com/Cscharf91/collection-client" rel="noopener noreferrer" target="_blank">View Code</a> 
                </div>
            </div>
            <div className="project-container">
                <p className="project-title">Creddit:</p>
                <a href="https://trusting-ritchie-77abd5.netlify.app/" rel="noopener noreferrer" target="_blank"><img src={Creddit} alt="Creddit preview 1" className="project-pic" /></a><br /><br />
                <a href="https://trusting-ritchie-77abd5.netlify.app/" rel="noopener noreferrer" target="_blank"><img src={Creddit2} alt="Creddit preview 2" className="project-pic" /></a><br />
                <div className="project-desc">
                    <p className="project-bio">Built with Node.js, Express, MongoDB, and React. A website to share photos and have discussions, and vote on the best content!</p>
                    <p>Features:</p>
                    <ul>
                        <li>Create Zones (akin to Subreddits): a little section of Creddit to discuss any topic or hobby (ex: pics, pets, fitness, gaming)</li>
                        <li>Upvote and downvote comments</li>
                        <li>Nested comments</li>
                        <li>Optional image upload on posts</li>
                        <li>User profiles</li>
                        <li>Responsive design</li>
                    </ul>
                </div>
                <div className="btn-container">
                    <a className="nav-btn-inverted" href="https://trusting-ritchie-77abd5.netlify.app/" rel="noopener noreferrer" target="_blank">View Website</a>
                    <a className="nav-btn-inverted" href="https://github.com/Cscharf91/ceddit-frontend" rel="noopener noreferrer" target="_blank">View Code</a> 
                </div>
            </div>
            <div className="project-container">
                <p className="project-title">Soapstone:</p>
                <a href="https://youthful-dijkstra-cb3854.netlify.app/" rel="noopener noreferrer" target="_blank"><img src={Soapstone} alt="fb-clone" className="project-pic" /></a><br />
                <div className="project-desc">
                    <p className="project-bio">A tool where you create a structured sentence based off of a prompt for a client's English students. Created with MongoDB, Express, and Svelte.js.</p>
                    <p>Features:</p>
                    <ul>
                        <li>Teacher's portal to create prompts, phrases, categories, and words to add to the database</li>
                        <li>Flexible sentence creator where the student can creatively answer the prompt.</li>
                        <li>Simple and easy to use UX for young children to easily create, share, and view their classmates' "Soapstones"</li>
                    </ul>
                </div>
                <div className="btn-container">
                    <a className="nav-btn-inverted" href="https://youthful-dijkstra-cb3854.netlify.app/" rel="noopener noreferrer" target="_blank">View Website</a>
                    <a className="nav-btn-inverted" href="https://github.com/Cscharf91/soapbox-client" rel="noopener noreferrer" target="_blank">View Code</a> 
                </div>
            </div>
            <div className="project-container">
                <div className="project-title-wrapper">
                  <p className="project-title">Trade Tracker:</p>
                </div>
                <a href="https://powerful-chamber-15419.herokuapp.com/" rel="noopener noreferrer" target="_blank"><img src={TradeTracker} alt="Trade Tracker" className="project-pic" /></a><br />
                <div className="project-desc">
                    <p className="project-bio">Built with Rails and React. Enter stock trade data to see how different strategies are performing. The filters are based on my own experience trading.</p>
                    <p>Features:</p>
                    <ul>
                        <li>User authorization with Devise, keeping each user's trades private</li>
                        <li>Live data updating with React front end/Rails API</li>
                        <li>Filter your trades to see how certain strategies compare to others</li>
                        <li>View statistics to save time number crunching</li>
                    </ul>
                </div>
                <div className="btn-container">
                    <a className="nav-btn-inverted" href="https://powerful-chamber-15419.herokuapp.com/" rel="noopener noreferrer" target="_blank">View Website</a>
                    <a className="nav-btn-inverted" href="https://github.com/Cscharf91/stock-trade-tracker" rel="noopener noreferrer" target="_blank">View Code</a> 
                </div>
            </div>
        </div>
      </div>
  );
}

export default Projects;