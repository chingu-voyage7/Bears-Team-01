import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerPage extends Component{
  render(){
    return (
    <div>
      <div className="container">
        <p>Beer with an id of {this.props.match.params.id}</p>
      </div>  
    </div>
    )
  }
}

export default BeerPage;
