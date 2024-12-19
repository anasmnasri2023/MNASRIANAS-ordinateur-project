var express = require('express')
var router = express.Router()
const { list, create, update, deleteU } = require('./userService')
var validate = require('../middleware/validation')


router.get('/list', list)
router.post('/create/:age',validate, create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteU)

module.exports = router