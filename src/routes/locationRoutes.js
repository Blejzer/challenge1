const express = require('express')
const router = express.Router()
const Controller = require('../controllers/locationController')
let controller = new Controller('location')

router.post('/', controller.add)
router.get('/', controller.findAll)
router.get('/city/:id', controller.findAllByCity)
router.get('/:id', controller.findOne)

//TODO router.put('/:id', cityController.updateCity);

//TODO router.delete('/:id', controller.deleteById);

module.exports = router;