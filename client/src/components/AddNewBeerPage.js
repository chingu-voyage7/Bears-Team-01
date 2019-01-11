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
      style: ''
    }
  }
  render(){
    return (
    <div>
      <form onSubmit={this.handleSubmitClick}>
        <div className="form-group mt-3 p-1">
          <label htmlFor="beername">
            Name
          </label>
          <input 
            onChange={this.handleTextAreaChange} 
            id="beername" 
            className="form-control" 
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
            onChange={this.handleTextAreaChange} 
            id="brewer" 
            className="form-control" 
            type="text" 
            name="brewer"
            placeholder="Brewer">
          </input>
        </div>
        <div className="form-group mt-3 p-1">
          <label htmlFor="description">
            Description
          </label>
          <textarea 
            onChange={this.handleTextAreaChange} 
            id="description" 
            className="form-control" 
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
    </div>
    )
  }
}

export default AddNewBeerPage;
