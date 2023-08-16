const mongoose = require('mongoose')

const flightsSchema = new mongoose.Schema({
  AIRLINE: String,
  FLIGHT_NUMBER: Number,
  ORIGIN_AIRPORT: String,
  DESTINATION_AIRPORT: String,
  CANCELLED: Boolean,
  DEPARTURE_DATE: Date,
  ARRIVAL_DATE: Date,
})

const Flights = mongoose.model('flights', flightsSchema)

module.exports = Flights
