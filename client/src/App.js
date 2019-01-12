import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Welcome from "./components/WelcomePage";
import Dashboard from "./components/Dashboard";
import Browse from "./components/BrowsePage";
import NotFoundPage from "./components/NotFoundPage";
import BeerPage from "./components/BeerPage";
import ReviewBeer from "./components/ReviewBeer";
import PrivacyPage from "./components/PrivacyPage";
import ProfilePage from "./components/profile/ProfilePage";

import isEmpty from "./utilityFns/isEmpty";

import "./styles/styles.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: Object.create(null) // create object with empty prototype
    };
  }

  getUser = () => {
    fetch("/users/current")
      .then(response =>
        response.status === 200 ? response.json() : Object.create(null)
      )
      .then(userData => this.setState({ userData }))
      .catch(err => console.log(err));
  };
  componentDidMount = () => {
    this.getUser();
  };
  render() {
    const { userData } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar userData={userData} />
          <div className="container page-content">
            <Switch>
              <Route
                path="/"
                render={() =>
                  isEmpty(userData) ? (
                    <Welcome />
                  ) : (
                    <Dashboard userData={userData} />
                  )
                }
                exact={true}
              />
              <Route path="/browse" component={Browse} exact={true} />
              <Route
                path="/review"
                render={() => <ReviewBeer userData={userData} />}
                exact={true}
              />
              <Route
                path="/beer/:id"
                render={props => <BeerPage {...props} userData={userData} />}
                exact={true}
              />
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
