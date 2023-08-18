const { request, response } = require('express')

// Mongoose Schemas
const Airports = require('../schemas/airport.schema')

/**
 * Airport Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const getAllAirports = async (req = request, res = response) => {
  // Returns list of Airport objects under "result" field
  // #swagger.description = 'Returns list of all airports from a city, state, or country'
  // #swagger.parameters['city'] = { description: 'City to filter by', type: 'string', example: 'New York' }
  // #swagger.parameters['state'] = { description: 'State to filter by', type: 'string', example: 'NY' }
  // #swagger.parameters['country'] = { description: 'Country to filter by', type: 'string', example: 'United States' }
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
                              "$ref": "#/components/schemas/Airport"
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
    if (req.query.city) {
      query.CITY = { '$regex': req.query.city, $options: 'i' }
    }

    if (req.query.state) {
      query.STATE = { '$regex': req.query.state, $options: 'i' }
    }

    if (req.query.country) {
      query.COUNTRY = { '$regex': req.query.country, $options: 'i' }
    }
    // Make query but case insensitive
    const result = await Airports.find(query).select('-_id').limit(20)

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
  getAllAirports,
}
