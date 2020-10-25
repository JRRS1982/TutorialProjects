Summary: A way more complicated than it needs to be Fibonacci calculator. Using multiple container images and a CI/CD workflow that is bloomin complicated! AWS Elastic Beanstalk, AWS Relational Database, AWS Elastic Cache all in use and being deployed only on merge of master branch.

I will need to return to this project in the future and finish it off, have hit the cap of what I need from this course and need to teach myself React.

Browser - when user first opens web browser they first visit a Nginx web server.

Nginx - will do some routing, to either a React Server or Express Server. If the request from the browser comes in an /api/ prefix it will go to the 'client', else the request will go to the 'server'. Nginx is acting like a middleman that takes requests from the browser and distributes requests, it will strip the /api/ from the request so the 'client' does not need to have the endpoint in that server prefixed with /api/. In the Dockerfile for this we are overwriting the existing default file from nginx with our config file.

React Server - if the request to Nginx is for front end assets the routing from Nginx will be to the React Server.

Express Server - if the request to Nginx is for a backend API will be to the Express Server - it acts like an API, that requests data from Redis and Postgres.

Redis - manages state and has a two way relationship to a worker. It stores all the fibonacci indices as key value pairs. 

Postgres - database of indices that have been received.

Worker - a working making requests back and forth to Redis. It watches redis for new indicies that have been added, pulls each new indice out, calculates a new value then puts it back into redis.

AWS Elastic Beanstalk Instance - in production this contains, Nginx, express server, nginx with production files and the worker. 

AWS Relational Database Service - in production this contains the postgres database.

AWS Elastic Cache - in production this contains the Redis. Why use it? Auto creates and updates an instance of redis for you, with many default settings that are beneficial. It is also easy to scale, better security, easy to migrate from AWS Elastic Beanstalk. It has build in logging.

Travis.yml - will only build "on" when master branch is pushed, not on every feature branch.
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



--- 
## CI / CD Workflow

1. Push code to github
2. Travis auto pulls repo
3. Travis builds a TEST image and tests the code
4. Travis builds PRD images
5. Travis pushes built PRD images to Docker Hub
6. Travis pushes project to AWS Elastic Beanstalk
7. Elastic Beanstalk pulls images from Docker Hub and deploys.

Docker hub is a central repo in the Docker world, AWS Elastic Beanstalk will pull images from there, which means that Travis builds the images and therefore Elastic Beanstalk does not need to build the images.

There are environment variables for IAM's user in travis project, which provides travis what is needed for deployment on Elasticbeanstalk.

- Dockerrun.aws.json : will tell Elasticbeanstalk how to deal with the multiple Docker images that we have created multi-client, multi-nginx, multi-server and multi-worker, that were created in the travis.yml file. This is similar in setup to the docker-compose.yml file, the docker-compose file typically lists "services" that can be "run" and provides environment variables etc that are required to run commands, while the Dockerrun.aws.json file will list out "container definitions" and provides the information required to build an image. The hostname on server is api as we renamed the host to api to provide better clarity in the default.conf file of nginx. At least one container must be essential in a dockerrun file, a host name is not required. links create a unidirectional link from nginx to client and server. port mapping creates a mapping between the client and host, i.e. between app and browser.
  - Where to pull all of the images from
  - What resources to allocate to each of the images
  - How to set up port mappings etc

- Amazon Elastic Container Services - elastic beanstalk actually doesn't know how to host containers, it is delegated to ECS. You create task definitions, these are a file that tells ECS how to run one container that contains a definition. A Dockerrun file will be the source of this information, therefore the Dockerrun file needs to comply with the documentation of the "ECS task definition". i.e. look up ECS task definitions / "aws task definition parameters" for support when creating a Dockerrun file. 
