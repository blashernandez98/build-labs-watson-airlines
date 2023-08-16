const mongoose = require('mongoose')

const airportsSchema = new mongoose.Schema({
  IATA_CODE: String,
  AIRPORT: String,
  CITY: String,
  STATE: String,
  COUNTRY: String,
})

const Airports = mongoose.model('airports', airportsSchema)

module.exports = Airports
