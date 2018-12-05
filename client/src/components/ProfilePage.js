import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AboutSection from './profile/About';
import TimelineSection from './profile/Timeline';
import EditSection from './profile/Edit';

class ProfilePage extends Component {
  //todo: separate state so it can be used by the navbar and other components.
  //if this.state.userData.name > 0, show "profile" link
  // and "logged in as (name)" in the navbar
  constructor() {
    super();
    this.state = {
      userData : {
        name: ''
      }
    }
  }
  getUser = () => {
    fetch('/user', {credentials: 'include'})    
    .then(response => response.json())
    .then(json => this.setState({userData: json}))
    .catch(err => console.log(err))
  }
  componentDidMount = () => {
    this.getUser();
  }
  render() {
    return (
      <header>
        <h1>Profile Page</h1>
        <h3>{this.state.userData.name}</h3>
        <p>Joined on: {this.state.userData.date}</p>
        <button>About</button>
        <button>Timeline</button>
        <button>Edit</button>
        <AboutSection />
        <TimelineSection />
        <EditSection />
      </header>
    )
  }
}

export default ProfilePage;