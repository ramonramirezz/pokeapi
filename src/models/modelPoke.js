const mongoose = require('mongoose');
// Setup schema
let contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    type: String,
    ability: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
let Contact = module.exports = mongoose.model('pokeapi', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}