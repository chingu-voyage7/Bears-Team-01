const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google OAuth routes
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/failedLogin' }),
  (req, res) => {
    if (process.env.NODE_ENV === 'production') {
      return res.redirect('/');
    } else {
      return res.redirect('http://localhost:3000'); // TODO: doesn't work with fetch request, why??
    }
  }
);

//Facebook authentication routes

router.get(
  '/facebook', 
  passport.authenticate('facebook')
);

router.get(
  '/facebook/callback', 
  passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/failedLogin'
  })
);

module.exports = router;
