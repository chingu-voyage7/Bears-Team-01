import React, { Component } from 'react';
import AboutSection from './profile/About';
import TimelineSection from './profile/Timeline';

class ProfilePage extends Component {
  //todo: separate userData so it can be used by the navbar and other components.
  //if this.state.userData.name > 0, show "profile" link
  // and "logged in as (name)" in the navbar
  constructor() {
    super();
    this.state = {
      userData : {
        name: ''
      },
      timelineIsActive: true,
      aboutIsActive: false,
    }
  }
  handleTimelineTab = () => {
    this.setState(() => ({ 
      timelineIsActive: true,
      aboutIsActive: false,
    }));
  }    
  handleAboutTab = () => {
    this.setState(() => ({ 
      timelineIsActive: false,
      aboutIsActive: true,
    }));
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
        {!!this.state.userData.picture && <img src={this.state.userData.picture}></img>}
        <h3>{this.state.userData.name}</h3>
        <button onClick={this.handleTimelineTab}>Timeline</button>
        <button onClick={this.handleAboutTab}>About</button>
        {!!this.state.timelineIsActive && <TimelineSection />}
        {!!this.state.aboutIsActive && <AboutSection userData={this.state.userData} />}
      </header>
    )
  }
}

export default ProfilePage;