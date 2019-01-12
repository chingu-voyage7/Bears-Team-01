import React, { Component } from "react";
import BeerList from "./BeerList";

class BrowsePage extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  getBeers = () => {
    fetch("/beers")
      .then(response => response.json())
      .then(beers => {
        window.localStorage.setItem("beerList", JSON.stringify(beers));
        this.setState({ beers });
      })
      .catch(err => console.log(err));
  };
  componentDidMount = async () => {
    const currentBeerList = window.localStorage.getItem("beerList");
    console.log("beerList", currentBeerList);

    if (!currentBeerList) {
      await this.getBeers();
    } else {
      this.setState({ beers: JSON.parse(currentBeerList) });
    }

    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div>
        <h1>Most Recent</h1>
        <BeerList beers={this.state.beers} />
      </div>
    );
  }
}

export default BrowsePage;
