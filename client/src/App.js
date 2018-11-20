import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
