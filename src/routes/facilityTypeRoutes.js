const express = require('express')
const router = express.Router()
const Controller = require('../controllers/facilityTypeController')
let controller = new Controller('facilitytype')

router.post('/new', controller.add)
router.get('/new', controller.newFt)
router.put('/:id', controller.update)
router.get('/', controller.findAll)
router.delete('/:id', controller.remove)

module.exports = router;