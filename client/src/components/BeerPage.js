import React, { Component } from 'react';

class BeerPage extends Component{
//Id: this.props.match.params.id
  render(){
    return (
    <div>
        <div className="row">
          <div className="col-lg-9 padding-mobile">
            <div className="row">     
              <div className="col-lg-12">
                <div className="beer-container info">
                    <div className="top row col-lg-12">
                      <div className="col-md-2 beer-img-container">
                        <img className="beer-img" alt="beer-icon" src="https://i.imgur.com/oLXSUJP.png"></img>
                      </div>
                      <div className="name col-md-10">
                        <h2>Hazy Little Thing</h2>
                        <p className="brewery">Sierra Nevada Brewing Co.</p>
                        <div className="row rating-section">
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
              <div className="col-lg-12 mt-4 padding-mobile">
                <div className="beer-container reviews">
                  <h4 className="mb-4">Reviews</h4>
                  <div className="row">
                    <div className="col-sm-2 review-info">
                      <img className="review-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                      <span 
                        className="user-rating"
                        id="user-rating"
                        role="img"
                        aria-label="star"
                      >⭐⭐⭐⭐</span>
                      <p>4.35/5</p>
                    </div>
                    <div className="col-sm-8">
                      <p className="review-text">Pours a cloudy amber color. One inch head of an off-white color. Good retention and slight lacing. Smells of a hint of wood, hint of sage, slight citrus hops, sweet malt, slight alcohol, yeast, esters, dough, and a hint of cinnamon. Fits the style of a Belgian Tripel. Mouth feel is sharp and clean, with an average carbonation level. Tastes of slight citrus hops, sweet malt, alcohol, yeast, esters, dough, and a hint of cinnamon. Overall, great aroma, great complexity, good blend and body. The cinnamon/sage combination might be eucalyptus, but I have no reference.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 padding-mobile">
            <div className="beer-container recent">
              <div className="col-lg-12">
                <h4 className="mb-4">Recent Likes</h4>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-6">
                  <div className="row">
                      <div className="col-lg-4">
                        <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                      </div>
                      <div className="col-lg-4">
                        <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                      </div>
                      <div className="col-lg-4">
                        <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                      </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-lg-4">
                    <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                  </div>
                  <div className="col-lg-4">
                    <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                  </div>
                  <div className="col-lg-4">
                    <img className="user-thumbnail" alt="user" src="https://i.imgur.com/BXELpe9.png"></img>
                  </div>
                </div>
                </div>
                </div>
            </div>
          </div> 
        </div>
    </div>
    )
  }
}

export default BeerPage;
