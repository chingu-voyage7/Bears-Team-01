const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log('/api/user/test route');
  res.json({ what: true });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/current_user', (req, res) => {
  // req.user will be truthy if user is logged in, falsy if not
  const responseObj = { loggedIn: !!req.user };

  return res.json(responseObj);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
