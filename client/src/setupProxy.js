const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
  app.use(proxy('/beers', { target: 'http://localhost:5000' }));
};
