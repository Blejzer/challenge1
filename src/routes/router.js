const express = require('express')
const router = express.Router()
const countryRoutes = require('./countryRoutes')
const cityRoutes = require('./cityRoutes')
const locationsRoutes = require('./locationRoutes')

router.use('/countries', countryRoutes)
router.use('/cities', cityRoutes)
router.use('/locations', locationsRoutes)
module.exports = router