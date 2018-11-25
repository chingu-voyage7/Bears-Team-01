import { GOOGLE_AUTH_ROUTE } from '../constants';

const makeGoogleAuthRequest = () =>
  fetch(GOOGLE_AUTH_ROUTE)
    .then(res => res.json())
    .then(res => console.log('response', res))
    .catch(e => console.error);

export default makeGoogleAuthRequest;
