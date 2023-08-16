const { request, response } = require('express')

// Mongoose Schemas
const Airlines = require('../schemas/airline.schema')

/**
 * Airline Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const getAllAirlines = async (req = request, res = response) => {
  // Returns all Airline objects under "result" field
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
                              "$ref": "#/components/schemas/Airline"
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
    const result = await Airlines.find({})
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
  getAllAirlines,
}
