const express = require('express')
const router = express.Router()

const flightController = require('../controllers/flight.controller')

router.get('/flights', flightController.getFlightsFiltered)
router.get('/flights/:id', flightController.getFlightById)

module.exports = router
