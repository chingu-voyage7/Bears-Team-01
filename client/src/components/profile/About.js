import React, { Component } from 'react';
import EditAboutMe from './EditAboutMe';

class AboutSection extends Component {
  //TODO: Display the "about" text from a function that deals with all the conditional logic
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
  handleSaveBio = (bio) => {
    const id = this.props.userData._id;
    fetch("/users/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({about:bio})
    }).then(() => {
      this.setState(() => ({ 
        editIsActive: !this.state.editIsActive
      }));
    });
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
            <div className="col-md-6">
                <label>Join date</label>
            </div>
            <div className="col-md-6">
                {this.props.userData.date 
                  && <p>{this.props.userData.date.substring(0,10)}</p>}
            </div>
        </div>
        <div className="row">
          <div className="col-md-6">
              <label>About</label>
          </div>
          <div className="col-md-6">
            {this.state.editIsActive ? (
              <EditAboutMe handleSaveBio={this.handleSaveBio} handleEditToggle={this.handleEditToggle} /> 
            ) : (
                <button className="btn btn-primary-outline edit-btn" onClick={this.handleEditToggle}>✏️Edit</button>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
              <label>Favorite Beers</label>
          </div>
          <div className="col-md-6">
                <p>Celebrator Dopplebock</p>
                <p>West Sixth Cerveza</p>
                <p>Funk Yeah</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default AboutSection;
