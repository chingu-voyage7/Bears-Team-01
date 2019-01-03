import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Welcome from './components/WelcomePage';
import Browse from './components/BrowsePage';
import NotFoundPage from './components/NotFoundPage';
import BeerPage from './components/BeerPage';
import PrivacyPage from './components/PrivacyPage';
import ProfilePage from './components/profile/ProfilePage';

import './styles/styles.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {}
    };
  }
  getUser = () => {
    fetch('/users/current')
      .then(response => response.json())
      .then(json => this.setState({ userData: json }))
      .catch(err => console.log(err));
  };
  componentDidMount = () => {
    this.getUser();
  };
  render() {
    // const userID = this.state.userData.id;
    const { userData } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar userData={userData} />
          <div className="container page-content">
            <Switch>
              <Route path="/" component={Welcome} exact={true} />
              <Route path="/browse" component={Browse} exact={true} />
              <Route path="/beer/:id" userId={userData.id} component={BeerPage} exact={true} />
              <Route path="/privacy" component={PrivacyPage} exact={true} />
              {!!userData.id && (
                <Route
                  path="/profile"
                  render={() => <ProfilePage {...{ userData }} />}
                  exact={true}
                />
              )}
              <Route path="/" component={NotFoundPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
