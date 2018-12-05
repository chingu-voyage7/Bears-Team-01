import React, { Component } from 'react';

class ProfilePage extends Component {
  //todo: separate state so it can be used by the navbar and other components.
  constructor() {
    super();
    this.state = {
      userData : {}
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
      <div>
        <h3>{this.state.userData.name}</h3>
        <p>Joined on: {this.state.userData.date}</p>
      </div>
    )
  }
}

export default ProfilePage;