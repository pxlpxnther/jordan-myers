import React from 'react';
import Me from './../assets/img/me.jpg';

const About = () => (
  <div className='about container'>
    <div className='flex-container'>
      <h1 className='mobile-heading'>
        {' '}
        Hey<span className='accent-color'>.</span>
      </h1>
      <div className='img-container'>
        <img src={Me} />
      </div>
      <div>
        <h1 className='desktop-heading'>
          Hey<span className='accent-color'>.</span>
        </h1>
        <p>
          So, to start off my name is Jordan Myers, I'm a web developer based in
          Edmonton Alberta. When I'm not developing, or designing applications
          you can catch me at local tech meet ups, grabbing coffee with friends,
          and the gym.
        </p>
      </div>
    </div>
  </div>
);

export default About;
