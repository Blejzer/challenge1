const express = require('express')
const router = express.Router()
const Controller = require('../controllers/eventController')
let controller = new Controller('event')

router.post('/', controller.add)
router.put('/:id', controller.update)
router.get('/', controller.findAll)
router.get('/new', controller.getNewEvent)
router.delete('/:id', controller.remove)

module.exports = router;