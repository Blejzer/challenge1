const express = require('express')
const router = express.Router()
// const controller = require('../controllers/cityController')
const Test = require('../controllers/cityController')
let test = new Test('city')

router.post('/', test.add)
router.get('/', test.findAll)
router.get('/country/:id', test.findByCountry)
router.get('/city/', test.findOneByCity)
router.get('/:id', test.findOneWithCountry)

//TODO router.put('/:id', cityController.updateCity);

//TODO router.delete('/:id', cityController.deleteById);

module.exports = router;