const express = require('express');
const router = express.Router();
// const countryController = require('../controllers/countryController')
const Test = require('../controllers/countryController')
let test = new Test('country')

router.post('/', test.add);
router.get('/', test.findAll);
router.get('/:id', test.findOne);
router.put('/:id', test.update);
router.delete('/:id', test.remove);

module.exports = router;