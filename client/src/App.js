import React, { Component } from 'react';
import OAuthTestLink from './components/OAuthTestLink';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('/api/user/test')
      .then(res => res.json())
      .then(res => console.log('fetch res', res))
      .catch(e => console.log('fetch error', e));
  }
  render() {
    return (
      <div className="App">
        <OAuthTestLink />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
