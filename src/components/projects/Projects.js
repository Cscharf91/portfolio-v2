import React from 'react';
import Nav from '../Nav';
import TradeTracker from '../../images/trade-tracker-preview.png';
import RJS from '../../images/rjs-billing.png';
import FBClone from '../../images/fb-clone.png';
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
                <p className="project-title">Creddit:</p>
                <a href="https://repl.it/@Cscharf91/chess" rel="noopener noreferrer" target="_blank"><img src={Creddit} alt="Creddit preview 1" className="project-pic" /></a><br /><br />
                <a href="https://repl.it/@Cscharf91/chess" rel="noopener noreferrer" target="_blank"><img src={Creddit2} alt="Creddit preview 2" className="project-pic" /></a><br />
                <div className="project-desc">
                    <p className="project-bio">Build with Node.js, Express, MongoDB, and React. A website to share photos and have discussions, and vote on the best content!</p>
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
                    <a className="nav-btn-inverted" href="https://powerful-chamber-15419.herokuapp.com/" rel="noopener noreferrer" target="_blank">View Website</a>
                    <a className="nav-btn-inverted" href="https://github.com/Cscharf91/stock-trade-tracker" rel="noopener noreferrer" target="_blank">View Code</a> 
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
            <div className="project-container">
                <p className="project-title">RJS Billing:</p>
                <a href="https://evening-ridge-12770.herokuapp.com/" rel="noopener noreferrer" target="_blank"><img src={RJS} alt="RJS-billing" className="project-pic" /></a><br />
                <div className="project-desc">
                    <p className="project-bio">A mock-up collection agency website. Made in Rails. Try out admin abilities with username: guest@guest.com password: guestpass1.</p>
                    <p>Features:</p>
                    <ul>
                        <li>Full admin-only functionality</li>
                        <li>Search for collections by various critieria to narrow down who to contact</li>
                        <li>Scan images and add time-stamped notes to each collection</li>
                        <li>Separate sign-up form for billers, which notifies admins</li>
                    </ul>
                </div>
                <div className="btn-container">
                    <a className="nav-btn-inverted" href="https://evening-ridge-12770.herokuapp.com/" rel="noopener noreferrer" target="_blank">View Website</a>
                    <a className="nav-btn-inverted" href="https://github.com/Cscharf91/collections-site" rel="noopener noreferrer" target="_blank">View Code</a> 
                </div>
            </div>
            <div className="project-container">
                <p className="project-title">BookFace:</p>
                <a href="https://fast-sierra-54264.herokuapp.com/" rel="noopener noreferrer" target="_blank"><img src={FBClone} alt="fb-clone" className="project-pic" /></a><br />
                <div className="project-desc">
                    <p className="project-bio">A social network website based off of Facebook. Created in Rails.</p>
                    <p>Features:</p>
                    <ul>
                        <li>Create a user, upload your profile picture, and edit your profile info</li>
                        <li>Send friend requests with the ability to accept/deny incoming requests</li>
                        <li>Post, and comment on posts</li>
                        <li>Make posts public (all users can view them), or visible to friends only</li>
                        <li>Like posts</li>
                        <li>Omniauth2 Facebook Login</li>
                    </ul>
                </div>
                <div className="btn-container">
                    <a className="nav-btn-inverted" href="https://fast-sierra-54264.herokuapp.com/" rel="noopener noreferrer" target="_blank">View Website</a>
                    <a className="nav-btn-inverted" href="https://github.com/Cscharf91/facebook-clone" rel="noopener noreferrer" target="_blank">View Code</a> 
                </div>
            </div>
        </div>
      </div>
  );
}

export default Projects;