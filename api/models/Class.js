const mongoose = require('mongoose');
const ClassSchema = mongoose.Schema({
    name: {
        type: String
    },
    times: {
        type: Array
    },
    instructor: {
        type: String
    }
});

module.exports = mongoose.model('class', ClassSchema);