import React from 'react';

const EditAboutMe = (props) => (
  <div>
    <textarea className="form-control d-block mb-3"></textarea>
    <button className="btn btn-outline-primary" onClick={props.handleEditToggle}>Save</button>
  </div>
);

export default EditAboutMe;
