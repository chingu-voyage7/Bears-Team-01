import React from 'react';

const EditAboutMe = (props) => (
  <div>
    <textarea></textarea>
    <button className="btn-info" onClick={props.handleEditToggle}>Save</button>
  </div>
);

export default EditAboutMe;
