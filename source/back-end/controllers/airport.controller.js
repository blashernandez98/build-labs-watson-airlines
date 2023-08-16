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
    // Your Code Goes Here!!!!
    const result = await Airports.find({}).limit(1)
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
