import React from 'react';
import { Link } from 'react-router-dom';

const BeerList = ({beers}) => {

    return (
      <section className="beers row">
        {beers.map(beer => 
          <article className="beer col-sm-12 col-md-12 padding-mobile mb-4" key={beer._id}>
            <div className="beer-container">
              <Link to={"/beer/" + beer._id} className="beer-name text-dark font-weight-bold">{beer.beerName}</Link>
              <hr/>
              <div>
                <p className="beer-style"><span className="text-orange">Style:</span> {beer.style}</p>
                <p><span className="text-orange">ABV:</span> {beer.abv}</p>
                <p><span className="text-orange">Availability:</span> {beer.availability}</p>
                <p><span className="text-orange">Notes:</span> {beer.notes}</p>
              </div>
            </div>
          </article> 
        )}
      </section>
    )
}

export default BeerList;
