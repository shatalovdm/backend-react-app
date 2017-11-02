const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/auth/facebook', passport.authenticate('facebook'));

	app.get('/auth/facebook/callback', passport.authenticate('facebook'));

	app.get('/current_user', (req, res) => {
		res.send(req.user);
	});

	app.get('/logout', (req, res) => {
		req.logout();
	});
};
