const express = require('express');
const passport = require('passport');
const GoogleStr = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
	new GoogleStr(
		{
			clientID: keys.googleID,
			clientSecret: keys.googleSecret,
			callbackURL: '/auth/google/callback'
		},
		accessToken => {
			console.log(accessToken);
		}
	)
);

app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email']
	})
);

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
