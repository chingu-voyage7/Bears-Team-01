const makeAuthRequest = route =>
  fetch(route)
    .then(res => res.json())
    .catch(e => console.error);

export default makeAuthRequest;