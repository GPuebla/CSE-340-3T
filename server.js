const express = require('express');
const mongodb = require('./data/database');
const dotenv = require('dotenv');
const routes = require('./routes');
const cors = require('cors');

const { swaggerUi, specs } = require('./swagger');



dotenv.config();
const app = express();

const routes = require('./routes/index');

app.use(cors()); 

app.use(express.json());
app.use('/', routes);

app.use('/api', routes); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;


mongodb.initDb((err) => {
  if(err){
    console.log(err);
  }
  else{
    app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});
  }
});