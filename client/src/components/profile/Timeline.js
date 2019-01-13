import React from "react";
import ActivityList from "./ActivityList";

const TimelineSection = props => (
  console.log("Timeline props", props),
  (
    <div className="" aria-labelledby="profile-tab">
      {!props.userData.reviews || props.userData.reviews.length === 0 ? (
        <p>No user activity to display.</p>
      ) : (
        <ActivityList user={props.userData} />
      )}
    </div>
  )
);

export default TimelineSection;
