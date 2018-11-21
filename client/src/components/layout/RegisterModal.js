import React from 'react';
import Modal from 'react-modal';

const RegisterModal = (props) => (
  <div>
    <div className="container">
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.handleRequestClose}
        contentLabel="Register"
        ariaHideApp={false}
      >
      <button onClick={props.handleRequestClose}>X</button>
        <h2 className="display-5 text-center">Sign Up</h2>
        <button className="btn btn-danger btn-block">Sign up with Gmail</button>
        <button className="btn btn-primary btn-block">Sign up with Facebook</button>
      </Modal>
    </div>
  </div>
)

export default RegisterModal;
