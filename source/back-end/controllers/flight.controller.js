const { request, response } = require('express')

// Mongoose Schemas
const Flights = require('../schemas/flight.schema')

/**
 * Flight Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const getFirstFlight = async (req = request, res = response) => {
  // Returns first flight in the database
  /* #swagger.responses[200] = {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                    "type" : "object",
                    "properties" : {
                        "result" : {
                            "type": "#/components/schemas/Flight"
                        }
                    }
                }
              }
            }
        }   
    */
  try {
    // Find first flight
    const result = await Flights.find({}).limit(1)

    // Return query result
    res.json({
      result: result,
    })
  } catch (error) {
    res.json({
      status: error.status,
    })
  }
}

/**
 * Sample Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const getFlightById = async (req = request, res = response) => {
  // Returns Flight by object id
  /* #swagger.responses[200] = {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                    "type" : "object",
                    "properties" : {
                        "result" : {
                            "type": "#/components/schemas/Flight"
                        }
                    }
                }
              }
            }
        }   
    */
  try {
    const result = await Flights.findById(req.params.id)
    // Return query result
    res.json({
      result: result,
    })
  } catch (error) {
    res.json({
      status: error.status,
    })
  }
}

module.exports = {
  getFirstFlight,
  getFlightById,
}
