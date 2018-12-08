import React from 'react';
import { Link } from 'react-router-dom';

const BeerPage = (props) => {
  return (
    <div>
      <div className="container">
        <p>Beer with an id of {props.match.params.id}</p>
      </div>  
    </div>
  );
}

export default BeerPage;
