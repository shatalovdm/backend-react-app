const mongoose = require('mongoose');
const { Schema } = mongoose;

const users = new Schema({
	googleId: String
});

mongoose.model('users', users);
