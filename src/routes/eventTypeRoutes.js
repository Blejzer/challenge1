const express = require('express')
const router = express.Router()
const Controller = require('../controllers/eventTypeController')
let controller = new Controller('eventtype')

router.post('/new', controller.add)
router.get('/new', controller.newEt)
router.put('/:id', controller.update)
router.get('/', controller.findAll)
router.delete('/:id', controller.remove)

module.exports = router;