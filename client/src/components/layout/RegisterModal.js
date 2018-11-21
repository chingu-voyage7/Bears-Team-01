import React from 'react';
import Modal from 'react-modal';

const RegisterModal = (props) => (
  <div>
    <Modal
      isOpen={true}
      contentLabel="Register"
      ariaHideApp={false}
    >
      <h2>Sign Up</h2>
      <button>Sign up with Gmail</button>
      <button>Sign up with Facebook</button>
    </Modal>
  </div>
)

export default RegisterModal;
