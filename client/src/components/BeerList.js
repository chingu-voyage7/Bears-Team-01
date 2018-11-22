import React from 'react';

const BeerList = ({beers}) => {

    return (
      <section className="beers row">
        {beers.map(beer => 
          <article className="beer col-sm-12 col-md-6 col-lg-3" key={beer._id}>
            <p className="beer-name">{beer.beerName}</p>
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
