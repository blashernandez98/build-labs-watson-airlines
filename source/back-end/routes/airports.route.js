const express = require('express')
const router = express.Router()

const airportController = require('../controllers/airport.controller')

router.get('/airports', airportController.getAllAirports)

module.exports = router
