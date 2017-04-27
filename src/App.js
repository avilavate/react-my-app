import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Danger from './Danger.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My-App</h2>
        </div>
        <Danger />
      </div>
    );
  }
}

export default App;
