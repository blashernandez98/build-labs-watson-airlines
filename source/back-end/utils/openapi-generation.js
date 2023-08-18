/**
 * For more information see: https://github.com/davibaltar/swagger-autogen#openapi-3x
 */
const swagger_autogen = require('swagger-autogen')({ openapi: '3.0.0' })

// Data schemas
const mongo_specs = {
  Flight: {
    AIRLINE: 'Watson',
    FLIGHT_NUMBER: 43,
    ORIGIN_AIRPORT: 'LAX',
    DESTINATION_AIRPORT: 'SFO',
    CANCELLED: false,
    DEPARTURE_DATE: 'Fri Aug 18 2023 12:30',
    ARRIVAL_DATE: 'Fri Aug 18 2023 16:30',
  },
  Airline: {
    IATA_CODE: 'AA',
    AIRLINE: 'American Airlines Inc.',
  },
  Airport: {
    IATA_CODE: 'LAX',
    AIRPORT: 'Los Angeles International Airport',
    CITY: 'Los Angeles',
    STATE: 'California',
    COUNTRY: 'United States',
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
      url: 'https://localhost:8080',
      description: 'Local Server',
    },
    {
      url: 'https://watson-rest-api.1642glnsh50v.us-south.codeengine.appdomain.cloud',
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
