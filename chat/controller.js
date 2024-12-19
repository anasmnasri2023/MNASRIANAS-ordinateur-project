var express = require('express')
var router = express.Router()
const { list, create, update, deleteU, chatView } = require('./chatService')
var validate = require('../middleware/chatValidation')


router.get('/list', list)
router.get('/chat', chatView)
router.post('/create',validate, create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteU)

module.exports = router