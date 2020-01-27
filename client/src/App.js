import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Customer from './Customer';
import Support from './Support';
import Subscribe from './Subscribe';

import './normalize.css';
import './skeleton.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Customer />} />
        <Route exact path="/support" render={() => <Support />} />
        <Route exact path="/subscribe" render={() => <Subscribe />} />
      </div>
    );
  }
}

export default App;