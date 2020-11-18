import React from 'react';

const Nav = (props) => {
  return (
    <div className="navbar">
      <div className="nav">
        <a className="nav-btn" href="/">Home</a>
        <a className="nav-btn" href="/projects">Projects</a>
        <a className="nav-btn" href="/contact">Contact</a>
      </div>
      <div className="title">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

export default Nav;