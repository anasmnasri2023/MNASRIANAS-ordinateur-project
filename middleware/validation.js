const yup = require('yup');

const validate = async (req, res, next) => {
    try {
        const schema = yup.object().shape({
            model: yup.string().required('Le modèle est requis'),  
            categorie: yup.string().required('La catégorie est requise'),
            datefabrication: yup.date().required('La date de fabrication est requise'),
            prix: yup.number().required('Le prix est requis').positive('Le prix doit être positif')
        });

        await schema.validate(req.body, { abortEarly: false });
        next();  
    } catch (error) {
        res.status(400).json({
            error: error.errors
        });
    }
};

module.exports = validate;
