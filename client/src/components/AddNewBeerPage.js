import React, { Component } from 'react';

class AddNewBeerPage extends Component {
  constructor() {
    super();
    this.state = {
      beerName: '',
      brewer: {
        location: '',
        name: ''
      },
      description: '',
      IBU: '',
      ABV: '',
      style: '',
      selectedPicture: null,
      status: ''
    }
  }
  handleNameChange = (e) => {
    this.setState({ beerName: e.target.value });
  };
  handleBrewerChange = (e) => {
    let brewer = {...this.state.brewer}
    brewer.name = e.target.value;
    this.setState({brewer});
  };
  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };
  handleSelectImage = (e) => {
    this.setState({ 
      selectedPicture: e.target.files[0]
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const data = { ...this.state };
    this.postNewBeer(data)
  };
  postNewBeer = (data) => {
    console.log(data.selectedPicture);
    if(data.beerName.length >= 3 && data.description.length > 20){
      fetch('/beers/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include' // include session cookie
      })
        .then(res => res.json())
        .then(newBeer => {
          if(newBeer.author){
            this.setState({ 
              status: 'Beer successfully created.'
            });
          }
          else {
            this.setState({ status: 'You must be logged in to do that!'});
          }
        })
        .catch(e => console.error(e));
    } else {
      if (data.name.length < 3){
        this.setState({ status: 'Beer name must be at least 3 characters long'});
      } else {
        this.setState({ status: 'Beer description must be at least 20 characters long.'});
      }
    }
  }
  render(){
    return (
      <div>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="form-group mt-3 p-1">
              <label htmlFor="beername">
                Name
              </label>
              <input 
                onChange={this.handleNameChange} 
                id="beername" 
                className="form-control mt-1" 
                type="text" 
                name="beername"
                placeholder="Beer Name">
              </input>
            </div>
            <div className="form-group mt-3 p-1">
              <label htmlFor="brewer">
                Brewer
              </label>
              <input 
                onChange={this.handleBrewerChange} 
                id="brewer" 
                className="form-control mt-1" 
                type="text" 
                name="brewer"
                placeholder="Brewer">
              </input>
            </div>
            <div className="form-group mt-3 p-1">
              <label htmlFor="picture">
                Choose Picture
              </label>
              <input 
                onChange={this.handleSelectImage} 
                id="picture" 
                type="file" 
                name="file"
                className="btn-block btn-sm mt-1 add-beer-picture"
                placeholder="Choose Picture" />
            </div>
            <div className="form-group mt-3 p-1">
              <label htmlFor="description">
                Description
              </label>
              <textarea 
                onChange={this.handleDescriptionChange} 
                id="description" 
                className="form-control mt-1" 
                type="text" 
                name="description"
                placeholder="Description goes here">
              </textarea>
            </div>
            <div className="form-group">
              <input 
                className="btn btn-primary mb-1 ml-1 mt-3" 
                type="submit" 
                value="Submit"
              />
            </div>
          </form>
          {this.state.status.length > 0 && <p className="ml-1">{this.state.status}</p>}
        </div>
      </div>
    )
  }
}

export default AddNewBeerPage;
