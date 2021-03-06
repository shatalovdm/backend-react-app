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
		async (accessToken, refreshToken, profile, done) => {
			const foundUser = await User.findOne({ googleId: profile.id });
			if (foundUser) {
				return done(null, foundUser);
			}
			const data = profile._json;
			const user = await new User({
				googleId: data.id,
				name: data.displayName,
				email: data.emails[0].value,
				avatar: data.image.url
			}).save();
			done(null, user);
		}
	)
);

passport.use(
	new FacebookStr(
		{
			clientID: keys.facebookID,
			clientSecret: keys.facebookSecret,
			callbackURL: '/auth/facebook/callback',
			profileFields: [
				'id',
				'displayName',
				'email',
				'picture.type(large)'
			],
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const foundUser = await User.findOne({ facebookId: profile.id });
			if (foundUser) {
				return done(null, foundUser);
			}
			const data = profile._json;
			const user = await new User({
				facebookId: data.id,
				name: data.name,
				email: data.email,
				avatar: data.picture.data.url
			}).save();
			done(null, user);
		}
	)
);
