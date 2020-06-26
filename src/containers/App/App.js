import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Navbar from './../../components/navbar/Navbar';

function App() {
  return (
    <div className='App content'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
