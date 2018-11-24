import React from 'react';
import ReactModal from 'react-modal';

const LoginModal = (props) => (
  <div>
    <div className="container">
      <ReactModal
        className="Modal"
        overlayClassName="Overlay"
        isOpen={props.isOpen}
        onRequestClose={props.handleRequestClose}
        contentLabel="Login"
        ariaHideApp={false}
        closeTimeoutMS={300}
      >
       <button className="btn btn-link nav-link text-muted close-button" onClick={props.handleRequestClose}>x</button>
        <div className="content">
          <h2 className="display-5 text-center">Login</h2>
          <button className="btn btn-danger btn-block">Login with Gmail</button>
          <button className="btn btn-primary btn-block">Login with Facebook</button>
        </div>
      </ReactModal>
    </div>
  </div>
)

export default LoginModal;
