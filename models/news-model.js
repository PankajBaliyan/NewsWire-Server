const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String
    }
})

module.exports = mongoose.model('news', newsSchema)