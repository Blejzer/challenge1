const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

router.post('/', countryController.addCountry);
router.get('/', countryController.findCountries);
router.get('/:id', countryController.findCountryById);
router.put('/:id', countryController.updateCountry);
router.delete('/:id', countryController.deleteById);

module.exports = router;