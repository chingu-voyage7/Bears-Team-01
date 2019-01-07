import React from 'react';
import ActivityList from './ActivityList';

const TimelineSection = (props) => (
  <div className="" aria-labelledby="profile-tab">

    <ActivityList user={props.userData}/>

  </div>
);

export default TimelineSection;
