const express = require('express');
const router = express.Router();
// const countryController = require('../controllers/OLDcountryController');
const controller = require('../controllers/controller1');

// router.post('/', countryController.addCountry);
router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
// router.put('/:id', countryController.updateCountry);
// router.delete('/:id', countryController.deleteById);
// router.get('/test/1', controler.findAll);

module.exports = router;