const express = require('express')
const router = express.Router()

const airlineController = require('../controllers/airline.controller')

router.get('/airlines', airlineController.getAllAirlines)

module.exports = router
