import React, { Component } from 'react';
import RateCategory from './RateCategory';
import { RATE_CATEGORIES } from '../constants';

class BeerReview extends Component {
  state = {
    categoryValues: {
      look: '',
      smell: '',
      taste: '',
      feel: '',
      overall: ''
    },
    textValue: ''
  };

  handleSelectChange = e => {
    // e.target.name and .value
    console.log('handleSelectChange', e.target);
    console.log('name', e.target.name);
    console.log('value', e.target.value);
    const { name, value } = e.target;
    return this.setState({
      categoryValues: {
        [name]: value
      }
    });
  };
}
