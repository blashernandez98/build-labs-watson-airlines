const express = require('express')
const router = express.Router()

const flightController = require('../controllers/flight.controller')

router.get('/flights', flightController.getFirstFlight)
router.get('/flights/:id', flightController.getFlightById)

module.exports = router
