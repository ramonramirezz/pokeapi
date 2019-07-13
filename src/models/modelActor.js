const mongoose = require('mongoose');
// Setup schema
let ActorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    sex: String,
    nationality: String,
    bio: String,
    image: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
let Actor = module.exports = mongoose.model('actor', ActorSchema);
module.exports.get = function (callback, limit) {
    Actor.find(callback).limit(limit);
}