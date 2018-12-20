import React, { Component } from 'react';
import AboutSection from './About';
import TimelineSection from './Timeline';

class ProfilePage extends Component {
  //TODO: Pass down userData as props from the app router to the other components.(vs 
  //the current system of fetch requests on every page.)
  //TODO: if there is no profile image, display randomized default image from database.
  //TODO: Add moment.js for date parsing.
  //TODO: "Change image" button functionality
  //TODO: Make "ratings" section dynamic
  constructor() {
    super();
    this.state = {
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
    fetch('/users/current')    
    .then(response => response.json())
    .then(json => this.setState({userData: json}))
    .catch(err => console.log(err))
  }
  componentDidMount = () => {
    this.getUser();
  }
  render() {
    return (
    <div>
      <div className="container profile-container">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                {!!this.state.userData.picture && <img src={this.state.userData.picture} alt="user-profile"></img>}
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file"/>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                  <h2>
                    {this.state.userData.name}
                  </h2>
                  <h6>
                    Beer Enthusiast
                  </h6>
                  <p className="profile-rating">RATINGS : <span>82</span></p>
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a className={this.state.timelineIsActive ? 'nav-link active': 'nav-link'} onClick={this.handleTimelineTab}>Timeline</a>
                    </li>
                    <li className="nav-item">
                      <a className={this.state.aboutIsActive ? 'nav-link active': 'nav-link'} onClick={this.handleAboutTab}>About</a>
                    </li>
                  </ul>
              </div>
            </div>

          </div>
          <div className="row">
              <div className="col-md-4">
              </div>
              <div className="col-md-6">
                <div className="tab-content profile-tab">
                  {!!this.state.timelineIsActive && <TimelineSection userData={this.state.userData} />}
                  {!!this.state.aboutIsActive && <AboutSection userData={this.state.userData} />}
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage;
