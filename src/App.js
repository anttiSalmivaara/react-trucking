import React, { Component } from 'react';
import Truck from './Truck';
import Road from './Road';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
          <div className="app">
              <Truck/>
              <Road />
          </div>
      </div>
    );
  }
}

export default App;
