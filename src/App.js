import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Even if you have no time stay kind</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

class Quota extends React.Component {
  render() {
    return(
    <div class="quota">
      <p className="quota-header">Timo M.</p>
      <p className="quota-body">
        Die stehen schon Schlange...
      </p>
      <div className="quota-footer">
        <a href="#" className="quota-footer-delete">
          Lösche Deine Sorry, no time - extension
        </a>
      </div>
    </div>
    );
  }
}

class QuotaBox extends React.Component {
  render() {
    return(
      <div className="quota-box">
        <h3>Sorry, no time - Wirklich gute Gründe</h3>
        <h4 className="quota-count">2 wirklich gute Gründe</h4>
        <div className="quota-list">
          <Quota />
          <Quota />
        </div>
      </div>
    );
  }
}
