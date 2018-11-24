const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const { googleClientID, googleClientSecret } = require('../config/keys');

const User = require('../models/user.model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      // callbackURL: '/auth/google/callback',
      callbackURL: 'http://localhost:5000/auth/google/callback', // CHANGE BACK TO RELATIVE PATH WHEN DEPLOYING
      proxy: true
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ profileID: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        const user = await new User({ profileID: profile.id }).save();
        done(null, user);
      } catch (e) {
        done(e);
      }
    }
  )
);