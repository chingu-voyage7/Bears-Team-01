import React, { Component } from 'react';

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      userData = {
        name: ''
      }
    }
  }
  getUser = () => {
    fetch('/user', {credentials: 'include'})    
    .then(response => response.json())
    .then(userData => this.setState({userData: userData}))
    .catch(err => console.log(err))
  }
  componentDidMount = () => {
    this.getUser();
  }
  render() {
    return (
      <div>
        <h1>{this.state.userData.name}</h1>
      </div>
    )
  }
}