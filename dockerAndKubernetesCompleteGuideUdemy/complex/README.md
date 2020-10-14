A way more complicated than it needs to be Fibonacci calculator.

Browser - when user first opens web browser they first visit a Nginx web server.

Nginx - will do some routing, to either a React Server or Express Server. 

React Server - if the request to Nginx is for front end assets the routing from Nginx will be to the React Server.

Express Server - if the request to Nginx is for a backend API will be to the Express Server - it acts like an API, that requests data from Redis and Postgres.

Redis - manages state and has a two way relationship to a worker. It stores all the fibonacci indices as key value pairs.

Postgres - database of indices that have been received.

Worker - a working making requests back and forth to Redis. It watches redis for new indicies that have been added, pulls each new indice out, calculates a new value then puts it back into redis.

---

"Values i have seen" on the page will be populated from the backend. 

"Calculated values" on the page will be populated from Redis.

--- 

HTML push state routing - 