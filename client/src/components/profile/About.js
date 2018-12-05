import React, { Component } from 'react';

const AboutSection = (props) => (
  <div>
    <div>
      <p>Name: {props.userData.name}</p>
      <p>Date joined: {props.userData.date}</p>
    </div>
  </div>
);

export default AboutSection;
