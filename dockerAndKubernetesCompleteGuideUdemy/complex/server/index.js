const keys = require('./keys');


// SETUP EXPRESS
const express = require('express'); // express library
const bodyParser = require('body-parser'); // library 
const cors = require('cors');

const app = express(); // create a new express app - an object that is going to receive and respond to any HTTP requests that are sent to the React server.
app.use(cors()); // cross origin resource sharing - allow us to make requests from one domain to another domain - from the React app to port where the express server is hosted
app.use(bodyParser.json()); // parse the body of the request from the React app into json, so that the express app can work with it.


// SETUP POSTGRES
const { Pool } = require('pg');

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on('connect', () => { 
  pgClient
    .query("CREATE TABLE IF NOT EXISTS values (number INT)") // create a table called values with a single column which will be an index of the items submitted from the React app.
    .catch((err) => console.log(err)); 
});

// SETUP REDIS
const redis = require("redis");
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

const redisPublisher = redisClient.duplicate(); // if you have a client that is listening or publishing info it can only be used for that, so a duplicate is required.


// EXPRESS ROUTE HANDLERS
app.get('/', (req, res) => {
  res.send('Hi');
});

app.get("/values/all", async (req, res) => {
  const values = await pgClient.query("SELECT * from values"); // standard SQL query
  res.send(values.rows); // respond with the values (only those)
});

app.get("/values/current", async (req, res) => {
  redisClient.hgetall('values', (err, values) => { // 'hgetall' hash value inside redis instance (called values) and get all the info from it.
    res.send(values); 
  });
});

app.post("/values", async (req, res) => {
  const index = req.body.index; // the index aka number we are going to use to calculate the fib number.

  if (parseInt(index) > 40) {
    // we are not looking to save huge figures in this project as will take long to process, so capping how big the number can be.
    return res.status(422).send("Index too high");
  }

  redisClient.hset("values", index, "I have calculated nothing yet!"); // saving the value to the location on the index... nothing yet is a placeholher
  redisPublisher.publish("insert", index); // publish a new 'insert' event... that will alert the worker
  pgClient.query("INSERT INTO values(number) VALUES($1)", [index]); // take the value of the index and add it to postgres
  res.send({ working: true }); // a response to just confirm that we are doing something to calculate the fib number.
});

d
app.listen(5000, err => {
  console.log('Listening')
});
