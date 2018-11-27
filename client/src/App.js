import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Welcome from './components/WelcomePage';
import Browse from './components/BrowsePage';
import NotFoundPage from './components/NotFoundPage';

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
               <Route path="/" component={NotFoundPage}/>
              </Switch>
             </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
