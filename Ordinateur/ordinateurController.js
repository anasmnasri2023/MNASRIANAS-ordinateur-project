var express = require('express');
var router = express.Router();
const { list, create, update, deleteU, searchByPrice } = require('./ordinateurService'); 
var validate = require('../middleware/validation');

router.get('/list', list);

router.post('/create', validate, create);  

router.put('/update/:id', validate, update);

router.delete('/delete/:id', deleteU);


router.get('/searchByPrice', searchByPrice); 

module.exports = router;
