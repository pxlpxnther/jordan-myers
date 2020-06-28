import React from 'react';

const Home = () => (
  <div className='home'>
    <section className='hero container'>
      <h1>
        Hi, <br />
        I'm Jordan.
      </h1>
      <h2>
        A web developer based in <span>Edmonton, Alberta</span>.
      </h2>
    </section>
    <section className='home featured container'>
      <h3>Featured</h3>
      <div className='feature'></div>
    </section>
    <section className='home clients container'>
      <h3>Clients</h3>
    </section>
  </div>
);

export default Home;
