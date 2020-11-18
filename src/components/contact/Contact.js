import React from 'react';
import Nav from '../Nav';
import './Contact.css';
import GitHub from '../../images/github-icon.png';
import LinkedIn from '../../images/linkedin-icon.png';
import Email from '../../images/email-icon.png';

const Contact = (props) => {
  return (
    <div className="contact">
        <Nav title="Contact" />
        <div className="contact-wrapper">
          <div className="contact-text">
            <h3>Let's get in touch!</h3>
            <p>If you would like to contact me regarding anything on this website or my projects, feel free to reach me at:</p>
          </div>
          <div className="contact-grid">
            <a href="mailto: cscharf91@gmail.com">
              <div className="hero-section">
                <img className="email-icon" src={Email} alt="GitHub" />
                <p className="contact-info">cscharf91@gmail.com</p>
              </div>
            </a>
            <a href="https://github.com/cscharf91">
              <div className="hero-section">
                  <img className="social-icon" src={GitHub} alt="GitHub" />
                  <p className="contact-info">Github</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/cory-scharf-707940199/">
              <div className="hero-section">
                <img className="social-icon" src={LinkedIn} alt="GitHub" />
                <p className="contact-info">LinkedIn</p>
              </div>
            </a>
          </div>
        </div>
    </div>
  );
}

export default Contact;