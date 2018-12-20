import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

class Navbar extends Component {
  state = {
    registerIsActive: false,
    loginIsActive: false
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

  render() {
    return (
      <div>
        <div className="top-bar"></div>
        <nav className="navbar navbar-expand-sm mb-4 color-white">
          <div className="container">
            <Link className="navbar-brand text-dark" to="/">BeerCraft</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
              <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/browse">Browse
                  </Link>
                </li>
              </ul>
      
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {this.props.userData.name ? (
                    <Link className="nav-link text-dark" to="/profile" className="nav-link text-dark">Profile</Link>
                    ) : ( <button onClick={this.handleRegisterToggle} className="btn btn-link nav-link text-dark">Sign Up</button>
                    )}
                </li>
                <li className="nav-item">
                  {this.props.userData.name ? (
                    <a href="/auth/logout" className="nav-link text-dark">Logout</a>
                  ) : (
                    <button onClick={this.handleLoginToggle} className="btn btn-link nav-link text-dark">Login</button>
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
