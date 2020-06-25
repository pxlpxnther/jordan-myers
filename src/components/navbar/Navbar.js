import React, { Component } from 'react';

class Navbar extends Component {
  toggleIcon = () => {
    document.querySelector('.navbar-nav').classList.toggle('show-nav');
    document.querySelector('#toggle-icon').classList.toggle('open');
  };
  render() {
    return (
      <nav className='container navbar flex-container' id='top'>
        <div className='navbar-logo flex-container'>
          <a href='#top'>JM</a>
          <p className='title'>
            hey<span>@</span>jordanmyers.ca
          </p>
        </div>
        <div className='toggle-icon' onClick={this.toggleIcon} id='toggle-icon'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className='navbar-nav flex-container'>
          <li>
            <a href='#top'>Portfolio</a>
          </li>
          <li>
            <a href='#top'>About</a>
          </li>
          <li>
            <a href='#top'>Blog</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
