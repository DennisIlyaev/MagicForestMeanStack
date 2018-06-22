const mongoose = require('mongoose');
const News = mongoose.Schema;

const data = new News({
    text: String
});

module.exports = mongoose.model('news', data, 'news');