var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JoueurSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    age: { type: Number, required: true }
});

module.exports = mongoose.model('Joueur', JoueurSchema);
