const express = require('express')
const router = express.Router()
// const controller = require('../controllers/cityController')
const Controller = require('../controllers/ptdController')
let controller = new Controller('ptd')

router.post('/', controller.add)
router.get('/', controller.findAll)
router.get('/p/:id', controller.findAllByPerson)

module.exports = router;