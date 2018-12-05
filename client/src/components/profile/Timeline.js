import React from 'react';

const TimelineSection = (props) => (
  //TODO: create a foreach loop with real user ratings
  <div className="" aria-labelledby="profile-tab">
    <div className="row">
      <div className="col-md-6">
          <label><span className="user-name">{props.userData.name}</span> rated Budweiser</label>
      </div>
      <div className="col-md-6">
        <span>⭐⭐⭐</span>
      </div>
  </div>
  <div className="row">
      <div className="col-md-6">
          <label><span className="user-name">{props.userData.name}</span> rated Pilsner Urqell</label>
      </div>
      <div class="col-md-6">
        <span>⭐⭐⭐⭐</span>
      </div>
  </div>
  <div className="row">
      <div className="col-md-6">
          <label><span className="user-name">{props.userData.name}</span> rated Sierra Nevada</label>
      </div>
      <div class="col-md-6">
          <span>⭐⭐⭐⭐⭐</span>
      </div>
  </div>
</div>
);

export default TimelineSection;
