const express = require('express')
const router = express.Router()
const Controller = require('../controllers/personController')
let controller = new Controller('person')

router.post('/', controller.add)
router.put('/:id', controller.update)
router.get('/', controller.findAll)
router.delete('/:id', controller.remove)
router.get('/c/', controller.findAllWithModels)

module.exports = router;