const express = require('express')
const router = express.Router()
const Controller = require('../controllers/tTypeController')
let controller = new Controller('ttype')

router.post('/', controller.add)
router.put('/:id', controller.update)
router.get('/', controller.findAll)
router.delete('/:id', controller.remove)

module.exports = router;