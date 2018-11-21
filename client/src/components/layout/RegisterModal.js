import React from 'react';
import ReactModal from 'react-modal';

const RegisterModal = (props) => (
  <div>
    <div className="container">
      <ReactModal
        className="Modal"
        isOpen={props.isOpen}
        onRequestClose={props.handleRequestClose}
        contentLabel="Register"
        ariaHideApp={false}
        closeTimeoutMS={300}
      >
       <button className="btn btn-link nav-link text-muted close-button" onClick={props.handleRequestClose}>x</button>
        <div className="content">
          <h2 className="display-5 text-center">Sign Up</h2>
          <button className="btn btn-danger btn-block">Sign up with Gmail</button>
          <button className="btn btn-primary btn-block">Sign up with Facebook</button>
        </div>
      </ReactModal>
    </div>
  </div>
)

export default RegisterModal;
