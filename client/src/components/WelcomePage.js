import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="index-header display-5">BeerCraft</h1>
              <p className="lead text-secondary">AI-Powered Beer Recommendations </p>
            </div>
          </div>
        </div>
       </div>  
    )
  }
}

export default Welcome;
