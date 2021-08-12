const mongoose = require('mongoose');

categorySchema = mongoose.Schema({
    name: {
        type: String,
        requred: true,
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Category', categorySchema);