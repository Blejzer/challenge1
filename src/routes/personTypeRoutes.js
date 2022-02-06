const express = require('express')
const router = express.Router()
const Controller = require('../controllers/personTypeController')
let controller = new Controller('persontype')

router.post('/new', controller.add)
router.get('/new', controller.newPt)
router.put('/:id', controller.update)
router.get('/', controller.findAll)
router.delete('/:id', controller.remove)

module.exports = router;