import React, { Component } from 'react';

class AddNewBeerPage extends Component {
  constructor() {
    super();
    this.state = {
      beername: '',
      brewery: {
        location: '',
        name: ''
      },
      description: '',
      IBU: '',
      ABV: '',
      style: '',
      status: ''
    }
  }
  handleNameChange = (e) => {
    this.setState({ beername: e.target.value });
  };
  handleBrewerChange = (e) => {
    let brewer = {...this.state.brewery}
    brewer.name = e.target.value;
    this.setState({brewer});
  }
  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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
                Picture
              </label>
              <input 
                onChange={this.handleTextAreaChange} 
                id="picture" 
                type="file" 
                name="file"
                className="btn-block btn-sm mt-1 add-beer-picture"
                placeholder="Add Picture">
              </input>
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
