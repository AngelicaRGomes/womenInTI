const db = require('mongoose');

const WomanSchema = new db.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    }
})


module.exports = db.model('diva', WomanSchema)