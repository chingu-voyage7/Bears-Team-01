const postBeerReview = (data) =>
  fetch('/beers/reviews/' + data.beerId, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include' // include session cookie
  })
    .then(res => res.json())
    .catch(e => console.error(e));

export default postBeerReview;
