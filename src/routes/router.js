const express = require('express')
const router = express.Router()
const countryRoutes = require('./countryRoutes')
const cityRoutes = require('./cityRoutes')
// const locationRoutes = require('./locationRoutes')
const eventRoutes = require('./eventRoutes')
const personRoutes = require('./personRoutes')
const facilityRoutes = require('./facilityRoutes')
const eventtypeRoutes = require('./eventTypeRoutes')
const facilitytypeRoutes = require('./facilityTypeRoutes')
const persontypeRoutes = require('./personTypeRoutes')
const ttypeRoutes = require('./tTypeRoutes')

// keep routers in afphabetical order pls

router.use('/cities', cityRoutes)
router.use('/countries', countryRoutes)
router.use('/et', eventtypeRoutes)
router.use('/event', eventRoutes)
router.use('/facility', facilityRoutes)
router.use('/ft', facilitytypeRoutes)
router.use('/persons', personRoutes)
router.use('/pt', persontypeRoutes)
router.use('/tt', ttypeRoutes)


module.exports = router