import React from 'react';
import { ReactComponent as FavoriteIcon } from '../../images/icons/favorite.svg';

const TimelineSection = (props) => (
  //TODO: create a foreach loop with real user ratings
  <div className="" aria-labelledby="profile-tab">
    <div className="row timeline-row">
      <div className="col-md-8">
          <label>
            <span className="user-name">{props.userData.name}</span> favorited Celebrator</label>
      </div>
      <div className="col-md-4">
        <FavoriteIcon className="svg" />
      </div>
    </div>
    <div className="row timeline-row">
      <div className="col-md-8">
          <label>
            <span className="user-name">{props.userData.name}</span> rated Budweiser</label>
      </div>
      <div className="col-md-4">
        <span 
          role="img"
          aria-labelledby="jsx-a11y/accessible-emoji"
          >⭐⭐⭐</span>
      </div>
  </div>
  <div className="row timeline-row">
      <div className="col-md-8">
          <label>
            <span className="user-name">{props.userData.name}</span> rated Pilsner Urqell</label>
      </div>
      <div className="col-md-4">
        <span 
          role="img"
          aria-labelledby="jsx-a11y/accessible-emoji"
        >⭐⭐⭐⭐</span>
      </div>
  </div>
  <div className="row timeline-row">
      <div className="col-md-8">
          <label>
            <span className="user-name">{props.userData.name}</span> rated Sierra Nevada</label>
      </div>
      <div className="col-md-4">
        <span 
          role="img"
          aria-labelledby="jsx-a11y/accessible-emoji"
          >⭐⭐⭐⭐</span>
      </div>
  </div>
</div>
);

export default TimelineSection;
