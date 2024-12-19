var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrdinateurSchema = new Schema({
    model: { type: String, required: true }, 
    categorie: { type: String, required: true },
    datefabrication: { type: Date, required: true },
    prix: { type: Number, required: true }
});

module.exports = mongoose.model('Ordinateur', OrdinateurSchema);
