const mongoose = require('mongoose');
const Users = mongoose.Schema;

const info = new Users({
    username: String,
    password: String
});

module.exports = mongoose.model('user', info, 'account');