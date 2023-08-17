const { request, response } = require('express')

// Mongoose Schemas
const Flights = require('../schemas/flight.schema')

/**
 * By date Flight Controller specify query params to filter by date, airline, origin, and destination
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const getFlightsFiltered = async (req = request, res = response) => {
  // Returns first flight in the database
  // #swagger.description = 'Returns list of flights filtered by date, airline, origin, and/or destination'
  // #swagger.parameters['date'] = { description: 'Date to filter by', type: 'string', example: '2019-01-01' }
  // #swagger.parameters['airline'] = { description: 'Airline to filter by', type: 'string', example: 'AA' }
  // #swagger.parameters['origin'] = { description: 'Origin to filter by', type: 'string', example: 'JFK' }
  // #swagger.parameters['destination'] = { description: 'Destination to filter by', type: 'string', example: 'LAX' }
  /* #swagger.responses[200] = {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                    "type" : "object",
                    "properties" : {
                        "result" : {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/Flight"
                            }
                        }
                    }
                }
              }
            }
        }
    */
  try {
    const query = {}

    if (req.query.date) {
      query.DEPARTURE_DATE = {
        $gte: new Date(req.query.date),
        $lt: new Date(req.query.date).setDate(
          new Date(req.query.date).getDate() + 1
        ),
      }
    }

    if (req.query.airline) {
      query.AIRLINE = req.query.airline
    }

    if (req.query.origin) {
      query.ORIGIN_AIRPORT = req.query.origin
    }

    if (req.query.destination) {
      query.DESTINATION_AIRPORT = req.query.destination
    }

    const result = await Flights.find(query).select('-_id').limit(20)

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
  // #swagger.description = 'Returns flight by object id'
  // #swagger.parameters['id'] = { description: 'Flight id', type: 'string', example: '63e53b3d123da255099f26ba' }
  /* #swagger.responses[200] = {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                    "type" : "object",
                    "properties" : {
                        "result" : {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/Flight"
                            }
                        }
                    }
                }
              }
            }
        }   
    */
  try {
    const result = await Flights.findById(req.params.id).select('-_id')
    // Return query result
    res.json({
      result: [result], // testing watson assistant with array
    })
  } catch (error) {
    res.json({
      status: error.status,
    })
  }
}

module.exports = {
  getFlightsFiltered,
  getFlightById,
}
