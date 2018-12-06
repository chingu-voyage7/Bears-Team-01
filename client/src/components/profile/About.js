import React, { Component } from 'react';
import EditAboutMe from './EditAboutMe';

class AboutSection extends Component {
  //TODO: Submit the data from the "about" section into the database
  constructor() {
    super();
    this.state = {
      editIsActive : false
    }
  }
  handleEditToggle = () => {
    this.setState(() => ({ 
      editIsActive: !this.state.editIsActive
    }));
  }    
  render() {
    return (
    <div>
      <div className="tab-pane fade show active" aria-labelledby="about-tab">
        <div className="row">
            <div className="col-md-6">
                <label>Name</label>
            </div>
            <div className="col-md-6">
                <p>{this.props.userData.name}</p>
            </div>
        </div>
        <div className="row">
            <div class="col-md-6">
                <label>Join date</label>
            </div>
            <div className="col-md-6">
                <p>{this.props.userData.date.substring(0,10)}</p>
            </div>
        </div>
        <div className="row">
            <div class="col-md-6">
                <label>Location</label>
            </div>
            <div className="col-md-6">
                <p>United States</p>
            </div>
        </div>
        <div className="row">
          <div className="col-md-6">
              <label>About</label>
          </div>
          <div className="col-md-6">
              {this.state.editIsActive === false && <button className="btn btn-primary-outline edit-btn" onClick={this.handleEditToggle}>✏️Edit</button>}
              {!!this.state.editIsActive ? <EditAboutMe handleEditToggle={this.handleEditToggle} /> : null}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default AboutSection;
