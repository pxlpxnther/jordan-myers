import React from 'react';
import Me from './../assets/img/me.jpg';

const About = () => (
  <div className='about container'>
    <h1>
      Hey<span className='accent-color'>.</span>
    </h1>
    <div className='img-container'>
      <img src={Me} />
    </div>
    <section>
      <h2>About Me</h2>
      <p>
        So, to start off my name is Jordan Myers, I'm a web developer based in
        Edmonton Alberta.
      </p>
      <h3>Likes</h3>
      <ul className='flex-container'>
        <li>🌶</li>
        <li>🖥</li>
        <li>🏃‍♂️</li>
      </ul>
    </section>
  </div>
);

export default About;
