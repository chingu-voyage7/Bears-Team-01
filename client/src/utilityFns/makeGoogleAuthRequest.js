import { GOOGLE_AUTH_ROUTE } from '../constants';

const fetchOptions = {
  mode: process.env.NODE_ENV === 'development' ? 'no-cors' : 'cors' // disable cors for development
};

const makeGoogleAuthRequest = () =>
  fetch(GOOGLE_AUTH_ROUTE, fetchOptions)
    .then(res => {
      if (res.status === 200) {
        window.location.href = '/';
      } else {
        window.location.href = '/failedLogin';
      }
    })
    .catch(e => console.error);

export default makeGoogleAuthRequest;
