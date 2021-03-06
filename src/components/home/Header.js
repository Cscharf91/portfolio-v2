import React from 'react';
import './Header.css';

const Header = () => {
  document.body.classList.add('red-bg');
  return (
    <div className="header">
      <div className="hero-grid slide-in">
        <div className="hero-section">
          <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-trophy-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
          </svg>
            <p>High Quality Websites</p>
        </div>
        <div className="hero-section">
          <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-hammer" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.812 1.952a.5.5 0 0 1-.312.89c-1.671 0-2.852.596-3.616 1.185L4.857 5.073V6.21a.5.5 0 0 1-.146.354L3.425 7.853a.5.5 0 0 1-.708 0L.146 5.274a.5.5 0 0 1 0-.706l1.286-1.29a.5.5 0 0 1 .354-.146H2.84C4.505 1.228 6.216.862 7.557 1.04a5.009 5.009 0 0 1 2.077.782l.178.129z"/>
            <path fillRule="evenodd" d="M6.012 3.5a.5.5 0 0 1 .359.165l9.146 8.646A.5.5 0 0 1 15.5 13L14 14.5a.5.5 0 0 1-.756-.056L4.598 5.297a.5.5 0 0 1 .048-.65l1-1a.5.5 0 0 1 .366-.147z"/>
          </svg>
          <p>Built the Way You Need</p>
        </div>
        <div className="hero-section">
        <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-wrench" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z"/>
        </svg>
          <p>Hands On Service</p>
        </div>
        <div className="hero-section">
          <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-file-code-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
          </svg>
          <p>Clean Code</p>
        </div>
      </div>
      <div className="hero-main">
        <p className="hero-intro fade-in-fast">Hello, I’m Cory Scharf. Come check out the things I created!</p>
        <p className="hero-bio fade-in-slow">I'm a full stack developer from New Jersey and I create interactive and responsive websites. 
        I truly love the entire process of creating websites, from the front end to the back end.
        When I'm not developing, I enjoy playing the piano, hiking, video games, and working out.</p>
      </div>
      <div className="hero-links slide-in-right">
        <a className="nav-btn" href="/projects/">View My Projects!</a>
        <a className="nav-btn" href="/contact/">Contact Me</a>
      </div>
    </div>
  );
}

export default Header;