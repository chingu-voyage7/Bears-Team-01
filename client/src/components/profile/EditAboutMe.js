import React from 'react';

const EditAboutMe = (props) => (
  <div>
    <textarea id="bio" placeholder={props.bio} className="form-control d-block mb-3"></textarea>
    <button 
      type="submit"
      className="btn btn-outline-primary" 
      onClick={e => {
        e.preventDefault();
        let bio = document.getElementById("bio").value;
        props.handleSaveBio(bio);
      }}
      >Save</button>
  </div>
);

export default EditAboutMe;

