const express = require('express');
const router = express.Router();
const countryRoutes = require('./countryRoutes');
const cityRoutes = require('./cityRoutes');

router.use('/countries', countryRoutes);
router.use('/cities', cityRoutes);
module.exports = router;