/**
 * For more information see: https://github.com/davibaltar/swagger-autogen#openapi-3x
 */
const swagger_autogen = require('swagger-autogen')({ openapi: '3.0.0' })

// Data schemas
const mongo_specs = {
  Flight: {
    type: 'object',
    properties: {
      AIRLINE: {
        type: 'string',
      },
      FLIGHT_NUMBER: {
        type: 'number',
      },
      ORIGIN_AIRPORT: {
        type: 'string',
      },
      DESTINATION_AIRPORT: {
        type: 'string',
      },
      CANCELLED: {
        type: 'boolean',
      },
      DEPARTURE_DATE: {
        type: 'date',
      },
      ARRIVAL_DATE: {
        type: 'date',
      },
    },
  },
  Airline: {
    type: 'object',
    properties: {
      IATA_CODE: {
        type: 'string',
      },
      AIRLINE: {
        type: 'string',
      },
    },
  },
  Airport: {
    type: 'object',
    properties: {
      IATA_CODE: {
        type: 'string',
      },
      AIRPORT: {
        type: 'string',
      },
      CITY: {
        type: 'string',
      },
      STATE: {
        type: 'string',
      },
      COUNTRY: {
        type: 'string',
      },
    },
  },
}

// API general specs
const general_specs = {
  info: {
    title: 'Watson Airlines Customer Experience',
    description:
      'This is a REST API for the Watson Airlines Customer Experience.',
    contact: {
      name: 'Blas Hernández',
      email: 'blashernandez98@gmail.com',
    },
    version: '1.0.0',
  },
  servers: [
    {
      url: 'https://localhost:3000',
      description: 'Local Server',
    },
    {
      url: 'https://{app-name}.{cloud-region}.codeengine.appdomain.cloud',
      description: 'IBM Code Engine Deployment',
    },
  ],
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  security: [],
  components: {
    schemas: mongo_specs,
  },
}

// API Routes
// NOTE: if using Express Router, pass only the root file where the route starts.
const api_routes = ['./app.js']

// Output file path
const output_file_path = '../docs/openapi-spec.json'

// Generate OpenAPI spec
swagger_autogen(
  (outputFile = output_file_path),
  (endpointsFiles = api_routes),
  (data = general_specs)
)
