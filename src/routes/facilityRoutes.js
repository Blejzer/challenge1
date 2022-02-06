const express = require('express')
const router = express.Router()
const Controller = require('../controllers/facilityController')
let controller = new Controller('facility')

router.get('/new', controller.newFacility)
router.get('/new1', controller.newFacility1)
router.post('/new1', controller.add)
router.put('/:id', controller.update)
router.get('/', controller.findAll)
router.delete('/:id', controller.remove)
router.get('/city/:id', controller.findAllByCity)

module.exports = router;