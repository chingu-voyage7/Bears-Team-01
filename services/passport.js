const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const {
  googleClientID,
  googleClientSecret,
  facebookClientID,
  facebookClientSecret,
  facebookCallbackURL
} = require("../config/keys");

//const configAuth = require('../do_not_commit/dev');

const User = require("../models/user.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      // callbackURL: '/auth/google/callback',
      callbackURL: "http://localhost:5000/auth/google/callback", // CHANGE BACK TO RELATIVE PATH WHEN DEPLOYING
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // console.log('google user profile is', profile);
        const existingUser = await User.findOne({ profileID: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const profileInfo = {
          profileID: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          picture: profile.photos[0].value.replace("?sz=50", "?sz=200")
        };
        const user = await new User(profileInfo).save();
        return done(null, user);
      } catch (e) {
        return done(e, null);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: facebookClientID,
      clientSecret: facebookClientSecret,
      callbackURL: facebookCallbackURL,
      profileFields: ["emails", "name", "picture.type(large)"]
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => {
        User.findOne({ profileID: profile.id }, (err, user) => {
          if (err) return done(err);
          if (user) return done(null, user);
          else {
            console.log("### new user sign up ###");
            const profileInfo = {
              profileID: profile.id,
              name: profile.name.givenName,
              email: profile.emails[0].value,
              picture: profile.photos[0].value
            };
            const newUser = new User(profileInfo);

            newUser.save(err => {
              if (err) throw err;
              else return done(null, newUser);
            });
          }
        });
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    return done(null, user);
  } catch (e) {
    return done(e, null);
  }
});

module.exports = passport;
// this gives the rest of the back end access to the req.user
