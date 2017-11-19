const mongoose = require('mongoose');
const { Schema } = mongoose;

const users = new Schema({
	googleId: String,
	facebookId: String,
	name: String,
	avatar: String,
	email: String
});

mongoose.model('users', users);
