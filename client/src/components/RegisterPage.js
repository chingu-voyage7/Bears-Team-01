import React, { Component } from 'react'

class Register extends Component {
  render() {
    return (
      <div>
        <div className="aligner">
          <div className="row aligner-item">
            <div className="col-md-6">
              <h1>Register</h1>
              <div className="form-group">
                <label for="username">Username</label>
                <input type="text" className="form-control" name="username" placeholder="username" />
              </div>
              <div className="form-group">
                <label for="username">Email</label>
                <input type="text" className="form-control" name="email" placeholder="email" />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" name="password" placeholder="password" />
              </div>
              <div className="form-group">
                <label for="username">Confirm Password</label>
                <input type="password" className="form-control" name="confirm_password" placeholder="confirm password" />
              </div>
              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
