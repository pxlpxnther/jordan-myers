import React, { Component } from 'react';
import Navbar from './../navbar/Navbar';

class Header extends Component {
  render() {
    return (
      <>
        <Navbar />
        <header className='hero container'>
          <h1>
            Hi, <br />
            I'm Jordan.
          </h1>
          {/* <h1>
            Jordan <br></br>Myers
          </h1> */}
          <h2>
            A web developer based in <span>Edmonton, Alberta</span>.
          </h2>
        </header>
      </>
    );
  }
}

export default Header;
