import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4">BeerCraft</h1>
              <p className="lead">AI-powered Beer Recommendations </p>
            </div>
          </div>
        </div>
       </div>  
    )
  }
}

export default Welcome;
