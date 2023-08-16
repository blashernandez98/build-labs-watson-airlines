const mongoose = require('mongoose')

const airlinesSchema = new mongoose.Schema({
  IATA_CODE: String,
  AIRLINE: String,
})

const Airlines = mongoose.model('airlines', airlinesSchema)

module.exports = Airlines
