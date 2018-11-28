import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Welcome from './components/WelcomePage';
import Browse from './components/BrowsePage';
import ReviewBeer from './components/ReviewBeer';

import './App.css';

const TEST_BEER_NAME = 'Sam Adams';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <ReviewBeer beerName={TEST_BEER_NAME}/>
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
