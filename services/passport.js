const passport = require('passport');
const GoogleStr = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
	new GoogleStr(
		{
			clientID: keys.googleID,
			clientSecret: keys.googleSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log(accessToken);
		}
	)
);
