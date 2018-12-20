import React, { Component } from 'react';

class PrivacyPage extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-4">
              <h1 className="display-5">Privacy Policy</h1>
            </div>
          </div>
          <div className="text-container">
            <ul>
              <h3 className="text-secondary font-weight-bold mt-4 mb-3">Public Account Information</h3>
              <li>
                <p>BeerCraft is a public community. Your username, your display name, your user avatar, your profile page information, and any public content you create are visible to anyone who visits BeerCraft.
                </p>
              </li>
              <li>
                <p>Your social activity on BeerCraft is public. Your comments and likes are public. You can delete a comment or undo a like at any time.
                </p>
              </li>
              <li>
                <p>You do not have to use your real name on BeerCraft, you may use a pseudonym. You can also change your profile information, user avatar, and your content at any time.
                </p>
              </li>
            </ul>
            <ul>
              <h3 className="text-secondary font-weight-bold mt-5 mb-3">Private Account Information</h3>
              <li>
                <p>We collect your email address at signup. We use your email address to send you communication essential to providing service, including registration confirmation and password reset email.
                </p>
              </li>
              <li>
                <p>If you sign up with a social login account (Google or Facebook) we receive your email address from these services, but we do not collect a password for your account.
                </p>
              </li>
            </ul>
            <ul>
              <h3 className="text-secondary font-weight-bold mt-5 mb-3">Security</h3>
              <li>
                <p>BeerCraft has implemented processes intended to protect user information and maintain security of data. It is each user’s responsibility to protect the security of his or her login information. 
                  These safeguards help prevent unauthorized access, maintain data accuracy, and ensure the appropriate use of data, but no guarantee can be made that your information and data will be secure from intrusions and unauthorized release to third parties.       
                </p>
              </li>
            </ul>
          </div>
        </div>
     </div>  
    )
  }
}

export default PrivacyPage;
