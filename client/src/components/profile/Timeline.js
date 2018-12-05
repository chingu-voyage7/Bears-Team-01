import React from 'react';

const TimelineSection = (props) => (
  //TODO: create a foreach loop with real user ratings
  <div class="" id="profile" aria-labelledby="profile-tab">
    <div class="row">
      <div class="col-md-6">
          <label><span className="user-name">{props.userData.name}</span> rated Budweiser</label>
      </div>
      <div class="col-md-6">
        <span>⭐⭐⭐</span>
      </div>
  </div>
  <div class="row">
      <div class="col-md-6">
          <label><span className="user-name">{props.userData.name}</span> rated Pilsner Urqell</label>
      </div>
      <div class="col-md-6">
        <span>⭐⭐⭐⭐</span>
      </div>
  </div>
  <div class="row">
      <div class="col-md-6">
          <label><span className="user-name">{props.userData.name}</span> rated Sierra Nevada</label>
      </div>
      <div class="col-md-6">
          <span>⭐⭐⭐⭐⭐</span>
      </div>
  </div>
</div>
);

export default TimelineSection;
