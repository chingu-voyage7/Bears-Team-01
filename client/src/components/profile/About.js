import React from 'react';

const AboutSection = (props) => (
  <div>
  <div className="tab-pane fade show active" aria-labelledby="home-tab">
    <div className="row">
        <div className="col-md-6">
            <label>Name</label>
        </div>
        <div className="col-md-6">
            <p>{props.userData.name}</p>
        </div>
    </div>
    <div className="row">
        <div class="col-md-6">
            <label>Join date</label>
        </div>
        <div className="col-md-6">
            <p>{props.userData.date}</p>
        </div>
    </div>
    <div className="row">
        <div class="col-md-6">
            <label>Location</label>
        </div>
        <div className="col-md-6">
            <p>United States</p>
        </div>
    </div>
    <div className="row">
    <div className="col-md-6">
        <label>About</label>
    </div>
    <div className="col-md-6">
        <p>✏️ Add about me</p>
    </div>
</div>
  </div>
  </div>
);

export default AboutSection;
