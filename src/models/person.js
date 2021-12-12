let mongoose = require('mongoose')
let personSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        },
    age : Number,
    favoriteFoods:[{
        type: String
    }]
})
module.exports = mongoose.model('Person', personSchema)