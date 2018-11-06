const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('./keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  // this is not the same as profile id.  
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy({
    // options for the google strat
    callbackURL: '/auth/google/callback',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    proxy: true
  },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            // we already have a record with the given profile ID
            done(null, existingUser);
          } else {
            // we don't have a user record with this ID, make a new record
            new User({ googleId: profile.id }).save()
              .save() 
              .then(user => done(null, user));
          }
        });
    }
  )
);