// We need these to connect Mongo Db
const { MongoClient } = require("mongodb");
require("dotenv").config(); // We are using dotenv for our .env file that contains our URI

// Get the URI from our .env file
const uri = process.env.MONGODB_URI;

// create a new MongoDb Client
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;
