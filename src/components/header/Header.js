import React, { Component } from 'react';

class Header extends Component {
  state = {
    showNav: false,
  };
  toggleIcon = () => {
    document.querySelector('.navbar-nav').classList.toggle('show-nav');
    document.querySelector('#toggle-icon').classList.toggle('open');
  };
  render() {
    return (
      <header>
        <nav className='navbar flex-container' id='top'>
          <div className='navbar-logo flex-container'>
            <a href='#top'>JM</a>
            <p className='title'>Developer</p>
          </div>
          <div
            className='toggle-icon'
            onClick={this.toggleIcon}
            id='toggle-icon'
          >
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
        <h1>Jordan Myers</h1>
      </header>
    );
  }
}

export default Header;
