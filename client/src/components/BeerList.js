import React from 'react';
import { Link } from 'react-router-dom';

const BeerList = ({beers}) => {

    return (
      <section className="beers row">
        {beers.map(beer => 
          <article className="beer col-sm-12 col-md-6 col-lg-3" key={beer._id}>
            <Link to={"/beer/" + beer._id} className="beer-name">{beer.beerName}</Link>
            <hr/>
            <div className="beer-info">
              <p className="beer-style"><span className="text-orange">Style:</span> {beer.style}</p>
              <p><span className="text-orange">ABV:</span> {beer.abv}</p>
              <p><span className="text-orange">Availability:</span> {beer.availability}</p>
              <p><span className="text-orange">Notes:</span> {beer.notes}</p>
            </div>
          </article> 
        )}
      </section>
    )
}

export default BeerList;
