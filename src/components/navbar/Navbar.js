import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  toggleIcon = () => {
    document.querySelector('.navbar-nav').classList.toggle('show-nav');
    document.querySelector('#toggle-icon').classList.toggle('open');
  };
  render() {
    return (
      <nav className='container navbar flex-container' id='top'>
        <div className='navbar-logo flex-container'>
          <Link to='/'>JM</Link>
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
            <Link to='/' onClick={this.toggleIcon}>
              Home
            </Link>
          </li>
          {/* <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li> */}
          <li>
            <Link to='/about' onClick={this.toggleIcon}>
              About
            </Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
