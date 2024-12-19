var Joueur = require('./joueurModel');

// Liste de tous les joueurs
async function list(req, res, next) {
    try {
        const joueurs = await Joueur.find();
        res.status(200).json(joueurs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Créer un nouveau joueur
async function create(req, res, next) {
    const { nom, prenom, age } = req.body;
    try {
        const nouveauJoueur = new Joueur({ nom, prenom, age });
        const joueur = await nouveauJoueur.save();
        res.status(201).json(joueur);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Mettre à jour un joueur existant
async function update(req, res, next) {
    const { id } = req.params;
    const { nom, prenom, age } = req.body;
    try {
        const joueur = await Joueur.findByIdAndUpdate(id, { nom, prenom, age }, { new: true });
        if (!joueur) {
            return res.status(404).json({ error: 'Joueur non trouvé' });
        }
        res.status(200).json(joueur);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Supprimer un joueur
async function deleteU(req, res, next) {
    const { id } = req.params;
    try {
        const joueur = await Joueur.findByIdAndDelete(id);
        if (!joueur) {
            return res.status(404).json({ error: 'Joueur non trouvé' });
        }
        res.status(200).json({ message: 'Joueur supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { list, create, update, deleteU };
