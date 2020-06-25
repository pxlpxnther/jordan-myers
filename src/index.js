import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './assets/sass/reset.scss';
import './assets/sass/main.scss';

const Footer = () => (
  <footer className='footer'>
    <small>&copy; 2020 Jordan Myers</small>
  </footer>
);

ReactDOM.render(
  [<App key='1' />, <Footer key='2' />],
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
