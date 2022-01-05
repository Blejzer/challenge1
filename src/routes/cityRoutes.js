const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

router.post('/', cityController.addCity);
router.get('/', cityController.findCities);
router.get('/country/:id', cityController.findCitiesByCountry);
router.get('/co/:id', cityController.findCitiesByCountryId);
router.get('/:id', cityController.findCityById);
router.put('/:id', cityController.updateCity);
router.delete('/:id', cityController.deleteById);

module.exports = router;