import React, { Component } from 'react';
import AboutSection from './profile/About';
import TimelineSection from './profile/Timeline';

class ProfilePage extends Component {
  //TODO: separate userData so it can be used by the navbar and other components.
  //if this.state.userData.name > 0, show "profile" link, and
  //"logged in as (name)" in the navbar
  //TODO: if there is no profile image, display randomized default image from database.
  //TODO: Add moment.js for date parsing.
  //TODO: "Change image" button functionality
  //TODO: Make "ratings" section dynamic
  //TODO: Make country section dynamic 
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
    <div>
      <div class="container">
          <div className="row">
            <div class="col-md-4">
              <div className="profile-img">
                {!!this.state.userData.picture && <img src={this.state.userData.picture} alt="user-profile"></img>}
                <div class="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file"/>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                  <h2>
                    {this.state.userData.name}
                  </h2>
                  <h6>
                    United States
                  </h6>
                  <p class="profile-rating">RATINGS : <span>82</span></p>
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a className={this.state.timelineIsActive ? 'nav-link active': 'nav-link'} onClick={this.handleTimelineTab}>Timeline</a>
                    </li>
                    <li class="nav-item">
                      <a className={this.state.aboutIsActive ? 'nav-link active': 'nav-link'} onClick={this.handleAboutTab}>About</a>
                    </li>
                  </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input type="submit" class="profile-edit-btn" value="Edit Profile"/>
            </div>
          </div>
          <div className="row">
              <div className="col-md-4">
              </div>
              <div className="col-md-8">
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
