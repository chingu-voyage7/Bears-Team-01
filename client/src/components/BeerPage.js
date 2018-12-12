import React, { Component } from 'react';

class BeerPage extends Component{
//Id: this.props.match.params.id
  render(){
    return (
    <div>
        <div className="row">
          <div className="col-lg-9 padding-mobile">
            <div className="beer-container info">
              <div className="row">
                <div className="top row col-lg-12">
                  <div className="col-md-2">
                    <img className="main-image" alt="beer-icon" src="https://i.imgur.com/oLXSUJP.png"></img>
                  </div>
                  <div className="name col-md-10">
                    <h2>Hazy Little Thing</h2>
                    <p className="brewery">Sierra Nevada Brewing Co.</p>
                    <div className="row">
                      <div className="col-sm-2">
                        <span 
                          role="img"
                          aria-label="star"
                        >⭐⭐⭐⭐</span>
                      </div>
                      <div className="col-sm-4">
                        <p className="rating-subtitle">88 ratings</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom col-lg-12">
                  <p className="rating">Rating, ranking and flavor information goes here.</p>
                </div>
              </div>  
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
