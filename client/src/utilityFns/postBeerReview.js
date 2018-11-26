const postBeerReview = (route, data) =>
  fetch(route, {
    method: 'POST', // correct HTTP verb?
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include' // include session cookie
  })
    .then(res => res.json())
    .catch(e => console.error(e));

export default postBeerReview;
