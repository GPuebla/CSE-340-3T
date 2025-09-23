const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');

let database;

const initDb = (callback) => {
  if (database) {
    console.log('Db is already initialized!');
    return callback(null, database);
  }

  MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
      database = client.db("CSE_341_DB"); 
      console.log('Database connected successfully');
      callback(null, database); 
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB', err);
      callback(err);
    });
};

const getDatabase = () => {
  if (!database) {
    throw new Error('Database not initialized');
  }
  return database;
};

module.exports = {
  initDb,
  getDatabase
};
