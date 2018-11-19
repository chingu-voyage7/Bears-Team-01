const express = require('express');
const router = express.Router();

router.get('/api/user/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/api/user/current_user', (req, res) => {
  // req.user will be truthy if user is logged in, falsy if not
  const responseObj = { loggedIn: !!req.user };

  return res.json(responseObj);
});

router.get('/api/user/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
