// swagger.js
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API for managing contacts and more',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
      {
        url: 'https://cse341-t3-lv-1-w2.onrender.com/api',
      },
      {
        url:'https://cse341-t3-lv.onrender.com/api/'
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
