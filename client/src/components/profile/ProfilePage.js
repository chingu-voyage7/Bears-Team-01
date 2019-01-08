import React, { Component } from 'react';
import AboutSection from './About';
import TimelineSection from './Timeline';

class ProfilePage extends Component {
  //TODO: if there is no profile image, display randomized default image from database.
  //TODO: Add moment.js for date parsing.
  //TODO: "Change image" button functionality
  constructor() {
    super();
    this.state = {
      timelineIsActive: true,
      aboutIsActive: false
    };
  }
  displayUserRanking = (ratings) => {
    if(ratings < 5){
      return <h6>Dabbler</h6>
    } else if (ratings < 50){
      return <h6>Beer Enthusiast</h6>
    } else if (ratings < 150) {
      return <h6>Beer Connoisseur</h6>
    } else {
      return <h6>Beer Expert</h6>
    }
  };
  handleTimelineTab = () => {
    this.setState(() => ({
      timelineIsActive: true,
      aboutIsActive: false
    }));
  };
  handleAboutTab = () => {
    this.setState(() => ({
      timelineIsActive: false,
      aboutIsActive: true
    }));
  };
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }
  render() {
    const { userData } = this.props;
    console.log("userData profile page: ", userData)
    return (
      <div>
        <div className="container profile-container">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                {!!userData.picture && (
                  <img src={userData.picture} alt="user-profile" />
                )}
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h2>{userData.name}</h2>
                {this.displayUserRanking(userData.reviews.length)}
                <p className="profile-rating">
                  RATINGS : {!!userData.reviews && <span>{userData.reviews.length}</span>}
                </p>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        this.state.timelineIsActive ? 'active' : ''
                      }`}
                      onClick={this.handleTimelineTab}
                    >
                      Timeline
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        this.state.aboutIsActive ? 'active' : ''
                      }`}
                      onClick={this.handleAboutTab}
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-6">
              <div className="tab-content profile-tab">
                {!!this.state.timelineIsActive && (
                  <TimelineSection {...{ userData }} />
                )}
                {!!this.state.aboutIsActive && (
                  <AboutSection {...{ userData }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
