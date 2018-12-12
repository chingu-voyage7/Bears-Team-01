import React, { Component } from 'react';

class BeerPage extends Component{
//Id: this.props.match.params.id
  render(){
    return (
    <div>
        <div className="row">
          <div className="col-lg-9 padding-mobile">
            <div className="beer-container info">
            <div className="name">
              <h2>Hazy Little Thing</h2>
              <p className="brewery">Sierra Nevada Brewing Co.</p>
            </div>
              <img className="main-image" alt="beer-icon" src="https://i.imgur.com/oLXSUJP.png"></img>
              <p>Rating: 4.98/5</p>
            </div>
          </div>  
          <div className="col-lg-3 padding-mobile">
            <div className="beer-container recent">
              <h4>Recent Likes</h4>
              <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
              <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
              <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
            </div>
          </div> 
        </div>
    </div>
    )
  }
}

export default BeerPage;
