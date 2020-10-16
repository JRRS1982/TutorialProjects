A way more complicated than it needs to be Fibonacci calculator.

Browser - when user first opens web browser they first visit a Nginx web server.

Nginx - will do some routing, to either a React Server or Express Server. If the request from the browser comes in an /api/ prefix it will go to the 'client', else the request will go to the 'server'. Nginx is acting like a middleman that takes requests from the browser and distributes requests, it will strip the /api/ from the request so the 'client' does not need to have the endpoint in that server prefixed with /api/. In the Dockerfile for this we are overwriting the existing default file from nginx with our config file.

React Server - if the request to Nginx is for front end assets the routing from Nginx will be to the React Server.

Express Server - if the request to Nginx is for a backend API will be to the Express Server - it acts like an API, that requests data from Redis and Postgres.

Redis - manages state and has a two way relationship to a worker. It stores all the fibonacci indices as key value pairs.

Postgres - database of indices that have been received.

Worker - a working making requests back and forth to Redis. It watches redis for new indicies that have been added, pulls each new indice out, calculates a new value then puts it back into redis.

---

"Values i have seen" on the page will be populated from the backend. 

"Calculated values" on the page will be populated from Redis.

--- 

HTML push state routing with 'otherpage'

nodemon - package for development that will reload the application whenever there are changes in the source code.

Development environment with complete copy of everything in it.

---

```
// build an image from a development Dockerfile and provide it the context of where (the period)
docker build -f Dockerfile.dev .

// check the image 
docker run <imageFromTheBuildAbove>
```

---

# docker-compose.yml

postgres
- what image to use? - latest postgres image

redis
- what image to use? - latest redis image

server
- specify build
- specify volumes
- specify env vars

```
volumes:
  // leave node_modules where they are
  /app/node_modules
  // every time we try to access the ./app file in the container, redirect the request back to the local ./server directory.
  ./server:/app 
```
