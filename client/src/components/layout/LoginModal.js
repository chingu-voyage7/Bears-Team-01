import React from 'react';
import ReactModal from 'react-modal';
import makeGoogleAuthRequest from '../../utilityFns/makeGoogleAuthRequest';

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
          <button onClick={makeGoogleAuthRequest} className="btn btn-danger btn-block">Login with Gmail</button>
          <a href="/auth/google">Login With Google</a>
          <button className="btn btn-primary btn-block">Login with Facebook</button>
          <a href="/auth/facebook">Login With Facebook</a>
        </div>
      </ReactModal>
    </div>
  </div>
)

export default LoginModal;
