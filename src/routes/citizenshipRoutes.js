const express = require('express')
const router = express.Router()
// const controller = require('../controllers/cityController')
const Controller = require('../controllers/citizenshipController')
let controller = new Controller('citizenship')

router.post('/', controller.add)
router.get('/', controller.findAll)
router.get('/country/:id', controller.findAllByPerson)

//TODO router.put('/:id', cityController.updateCity);

//TODO router.delete('/:id', cityController.deleteById);

module.exports = router;