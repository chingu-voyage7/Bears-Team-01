import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Welcome from './components/WelcomePage';
import Browse from './components/BrowsePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <div className="container">
              <Switch>
               <Route path="/" component={Welcome} exact={true} />
               <Route path="/browse" component={Browse} exact={true} />
              </Switch>
             </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
