var Ordinateur = require('./ordinateurModel'); 

async function list(req, res) {
    try {
        const ordinateurs = await Ordinateur.find();  
        res.status(200).json(ordinateurs);  
    } catch (error) {
        res.status(500).json({ error: error.message });  
    }
}


async function create(req, res) {
    try {
        const { model, categorie, datefabrication, prix } = req.body;  
        const nouvelOrdinateur = new Ordinateur({ model, categorie, datefabrication, prix });  
        const ordinateur = await nouvelOrdinateur.save();  
        res.status(201).json(ordinateur); 
    } catch (error) {
        res.status(500).json({ error: error.message });  
    }
}


async function update(req, res) {
    try {
        const { id } = req.params;  
        const { model, categorie, datefabrication, prix } = req.body;  
        const ordinateur = await Ordinateur.findByIdAndUpdate(id, { model, categorie, datefabrication, prix }, { new: true });  
        if (!ordinateur) {
            return res.status(404).json({ error: 'Ordinateur non trouvé' }); 
        }
        res.status(200).json(ordinateur);  
    } catch (error) {
        res.status(500).json({ error: error.message });  
    }
}


async function deleteU(req, res) {
    try {
        const { id } = req.params;  
        const ordinateur = await Ordinateur.findByIdAndDelete(id);  
        if (!ordinateur) {
            return res.status(404).json({ error: 'Ordinateur non trouvé' });  
        }
        res.status(200).json({ message: 'Ordinateur supprimé avec succès' });  
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
}

async function searchByPrice(req, res) {
    try {
        const { x, y } = req.query;

        if (!x || !y || isNaN(x) || isNaN(y)) {
            return res.status(400).json({ error: 'Les paramètres x et y doivent être des nombres valides' });
        }

        const prixMin = parseFloat(x);
        const prixMax = parseFloat(y);

        const ordinateurs = await Ordinateur.find({
            prix: { $gte: prixMin, $lte: prixMax }
        });

        if (ordinateurs.length === 0) {
            return res.status(404).json({ message: 'Aucun ordinateur trouvé dans cette plage de prix' });
        }

        res.status(200).json(ordinateurs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { list, create, update, deleteU, searchByPrice };
