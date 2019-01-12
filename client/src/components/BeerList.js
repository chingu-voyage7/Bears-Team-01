import React from 'react';
import { Link } from 'react-router-dom';

const BeerList = ({beers}) => {

    return (
      <section className="beers row">
        {beers.map(beer => 
          <article className="beer col-sm-12 col-md-12 padding-mobile mb-4" key={beer._id}>
            <div className="beer-container">
              <div className="row">
                <div className="col-lg-1 col-md-2 beer-icon-container">
                  {!!beer.image ? (
                    <img className="beer-icon" alt="beer-icon" src={"/images/" + beer.image}></img>
                  ) : (
                    <img className="beer-icon" alt="beer-icon" src="https://i.imgur.com/oLXSUJP.png"></img>
                  )}
                </div>
                <div className="col-lg-11 col-md-10 align-text-bottom">
                  <Link to={"/beer/" + beer._id} className="text-dark font-weight-bold"><h4>{beer.beerName}</h4></Link>
                </div>
              </div>
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
