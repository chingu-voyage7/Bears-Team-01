import React from 'react';
import Modal from 'react-modal';

const RegisterModal = (props) => (
  <div>
    <Modal
      isOpen={props.isOpen}
      contentLabel="Register"
      ariaHideApp={false}
    >
    <button onClick={props.handleRequestClose}>X</button>
      <h2>Sign Up</h2>
      <button>Sign up with Gmail</button>
      <button>Sign up with Facebook</button>
    </Modal>
  </div>
)

export default RegisterModal;
