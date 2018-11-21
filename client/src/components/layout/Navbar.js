import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from './RegisterModal';

class Navbar extends Component {
  state = {
    isActive: false
  }
  handleToggleModal = () => {
    this.setState(() => ({ isActive: !this.state.isActive }));
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
                  <Link className="nav-link" to="/drink"> Browse
                  </Link>
                </li>
              </ul>
      
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <button onClick={this.handleToggleModal} className="nav-link" to="/register">Sign Up</button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <RegisterModal 
          isOpen={this.state.isActive}
        />
      </div>
    )
  }
}

export default Navbar;
