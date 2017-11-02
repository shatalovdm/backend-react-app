const passport = require('passport');
const GoogleStr = require('passport-google-oauth20').Strategy;
const FacebookStr = require('passport-facebook').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => done(null, user));
});

passport.use(
	new GoogleStr(
		{
			clientID: keys.googleID,
			clientSecret: keys.googleSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then(foundUser => {
				if (foundUser) {
					done(null, foundUser);
				} else {
					new User({ googleId: profile.id })
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);

passport.use(
	new FacebookStr(
		{
			clientID: keys.facebookID,
			clientSecret: keys.facebookSecret,
			callbackURL: '/auth/facebook/callback',
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ facebookId: profile.id }).then(foundUser => {
				if (foundUser) {
					done(null, foundUser);
				} else {
					new User({ facebookId: profile.id })
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);
