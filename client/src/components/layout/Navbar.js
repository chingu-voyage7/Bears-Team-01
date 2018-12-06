import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

class Navbar extends Component {
  state = {
    registerIsActive: false,
    loginIsActive: false,
    userData : {
      name : ''
    }
  }
  handleRegisterToggle = () => {
    this.setState(() => ({ registerIsActive: !this.state.registerIsActive }));
  }  
  handleLoginToggle = () => {
    this.setState(() => ({ loginIsActive: !this.state.loginIsActive }));
  }
  handleRequestClose = () => {
    this.setState(() => ({ registerIsActive: false, loginIsActive: false }));
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
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">BeerCraft</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
              <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/browse">Browse
                  </Link>
                </li>
              </ul>
      
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {this.state.userData.name ? (
                    <Link className="nav-link" to="/profile" className="nav-link">Profile</Link>
                    ) : ( <button onClick={this.handleRegisterToggle} className="btn btn-link nav-link">Sign Up</button>
                    )}
                </li>
                <li className="nav-item">
                  {this.state.userData.name ? (
                    <Link to="/" className="nav-link">Logout</Link>
                  ) : (
                    <button onClick={this.handleLoginToggle} className="btn btn-link nav-link">Login</button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <RegisterModal 
          isOpen={this.state.registerIsActive}
          handleRequestClose={this.handleRequestClose}
        />
        <LoginModal 
          isOpen={this.state.loginIsActive}
          handleRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }
}

export default Navbar;
