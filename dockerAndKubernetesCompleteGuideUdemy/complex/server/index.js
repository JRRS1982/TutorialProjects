const keys = require('./keys');


// setup Express
const express = require('express'); // express library
const bodyParser = require('bodyParser'); // library 
const cors = require('cors');

const app = express(); // create a new express app - an object that is going to receive and respond to any HTTP requests that are sent to the React server.
app.use(cors()); // cross origin resource sharing - allow us to make requests from one domain to another domain - from the React app to port where the express server is hosted
app.use(bodyParser.json()); // parse the body of the request from the React app into json, so that the express app can work with it.


// setup Postgres
const { Pool } = require('pg');

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on('error', () => console.log('Lost PG connection')); // anytime there is a connection which has an error... console log it.

pgClient.on('connect', () => { 
  pgClient
    .query("CREATE TABLE IF NOT EXISTS values (number INT)") // create a table called values with a single column which will be an index of the items submitted from the React app.
    .catch((err) => console.log(err)); 
});