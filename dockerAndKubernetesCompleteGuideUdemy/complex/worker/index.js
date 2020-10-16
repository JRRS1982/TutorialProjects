const keys = require('./keys');
const redis = require('redis');

// create a redis client.
const redisClient = redis.createClient({
  host: keys.redisHost, // using hose from keys file
  port: keys.redisPort, // using the port from the keys file
  retry_strategy: () => 1000 // if lose connection to server, try once every 1000 milliseconds.
});

// create a duplicate of client above.
const sub = redisClient.duplicate();


// the fibonacci recursive solution.
function fib(index) {
  if (index < 2) return 1; // if index less than two (i.e. 0 and 1)
  return fib(index - 1) + fib(index - 2); // else add the value of the prior two together.
}

sub.on('message', (channel, message) => { // every time there is a new value in redis
  redisClient.hset( // hset being hash
    'values', // insert the new fib value into a hash called values.
    message, // the key of the hash will be the index - the message that was submitted into the form.
    fib(parseInt(message))// calculate a new fib value.
  );
});

sub.subscribe('insert'); // anytime a new value is inserted to redis