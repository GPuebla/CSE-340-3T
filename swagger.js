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
    ],
  },
  apis: ['./routes/*.js'], // busca los comentarios JSDoc en tus archivos de rutas
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
