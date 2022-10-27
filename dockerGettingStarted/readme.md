# Getting started with Docker

<https://github.com/docker/getting-started>

## Creating a Docker Image

```shell
docker build -t getting-started .
```

1. Where `-t getting-started` is tagging aka naming the image 'getting-started'
2. Don't forget the .

To start the container:

```shell
docker run -dp 3000:3000 getting-started
```

1. Creates a mapping between the hosts port 3000 and the containers port 3000
2. Application should then be running on `http://localhost:3000`
3. You can't have the same port used by more than one container - so check out what is running.

```shell
// To find out what containers are running:
docker ps

// To stop a container from running
docker stop <exampleContainerID>

// You may then want to remove the container
docker rm <exampleContainerID>

// or by forcing it
docker rm -f <exampleContainerID>
```

---

## Sharing the Docker Image

1. Create a repository on docker by logging into docker hub and following the simple commands to create a new public repository.

2. Push the image `docker push exampleDockerUserName/exampleDockerImageName` that you have just created / want to share to the public repo.

3. Your image may have a different name to that which is found remotely. So you may need to change the name of the local image

```shell
// find the name of the local image
docker image ls

// login to the docker hub then enter docker user/password when prompted
docker login -u exampleDockerUserName

// tag the image i.e. getting-started in this case with a new name.
docker tag getting-started exampleDockerUserName/getting-started
```

4. Now the image has a new name that matches what is on the remote docker hub you should be able to push it.

```
docker push exampleDockerUserName/getting-started
```

5. Boom - now you can run the image from the shared repo!

```
docker run -dp 3000:3000 exampleDockerUserName/getting-started
```

---

## Persisting the Database / Volumes

A docker container doesn't retain information, that isn't provided as part of its setup. i.e. each new container doesn't have what have a record of what has been done in a different container.

1. Create a named volume on the docker host, that will hold the data your you want to use in other containers. todo-db being the name of the volume being created for this db.

```shell
docker volume create todo-db
```

2. Start the todo container, but add -v flag to specify a volume to mount. We will use the named volume and mount it to /etc/todos, which will capture all files created at the path.

```shell
// this creates the exampleContainerName, but affixes (-v) the todo-db:/etc/todos volume to it.
docker run -dp 3000:3000 -v todo-db:/etc/todos exampleContainerName
```

3. Boom you are done. The volume has been created and as its been mounted / fixed onto the container the data created in the container will persist into other containers that use this volume.

* Where is that data actually being stored though?

```
docker volume inspect todo-db
// "Mountpoint" will show where exactly the file is.
```

---

## Bind mounts (live updates)

Named volumes as shown in persisting the db above allow us to save data, but the location of that data is not specified. Bind mounts control the exact mount point on the host. This can be used to persist data, but also to provide additional data into containers - such as source code. When working on an application we can use a bind mount to mount our source code into the container and let it/us see code changes right away, rather than rebuilding a new container.

1. Do some fancy code

```
docker run -dp 3000:3000 \
    -w /app -v $PWD:/app \
    node:12-alpine \
    sh -c "yarn install && yarn run dev"
```

Notes:

* If the port is not free it will not work - need to stop any other containers that are using that port, or pick another one.
* Will need this folder to be shared - Docker > Preferences > File-sharing
* -dp 3000:3000 Run in (-d) detached (background) mode and create a (-p) port mapping
* w /app - sets the "working directory" or the current directory that the command will run from
* node:12-alpine - the image to use. Note that this is the base image for our app from the Dockerfile
* sh -c "yarn install && yarn run dev" - the command. We're starting a shell using sh (alpine doesn't have bash) and running yarn install to install all dependencies and then running yarn run dev. If we look in the package.json, we'll see that the dev script is starting nodemon.

2. Watch the logs / wait for the code to complete executing.

```shell
docker logs -f <containerID>
```

When the below shows it will have finished .

```shell
docker logs -f <container-id>
$ nodemon src/index.js
[nodemon] 1.19.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] starting `node src/index.js`
Using sqlite database at /etc/todos/todo.db
Listening on port 3000
```

3. Boom, your done - now when you make changes in the source code it will be immediately be reflected in the app at port 3000. When you are finished with this container stop it and when you need another one to work in run:

```shell
docker build -t exampleContainerName
```

---

## Multi container apps

Each container should do one thing, and do it as well as possible. If two containers are on the same network then they can talk to each other, otherwise they cant. This is a good thing.

There are two ways to put a container on a network

* Assign it at the start.
* Connect an existing container.

### Creating the network then attaching the mysql container

1. Create the network.

```shell
// create the network and name it todo-app
docker network create todo-app
```

2. Start a mysql container and attach it to the network

```shell
// start a mysql container from the docker hub image.
// attach the mysql container to the todo-app network.
// define a few environment variables for the database.
// --network-alias is covered in more detail below - in the connecting to mysql section.
docker run -d \
    --network todo-app --network-alias mysql \
    -v todo-mysql-data:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=secret \
    -e MYSQL_DATABASE=todos \
    mysql:5.7
```

3. Check that the database is up and running.

```shell
docker exec -it <mysql-container-id> mysql -p
```

* when the prompt for a password appears type in 'secret' - we have just set the password above.

* this should put you into the mysql shell
* then 'SHOW DATABASES;' which should show the todos database!
* reminder these environment variables/passwords should be secret - not covered in this.

4. Boom! You have created a mysql database

---

## Connecting to mysql

If we run another container on the same network, how do we find the container? (each container has its own IP address)?

To figure it out, we're going to make use of the nicolaka/netshoot <https://github.com/nicolaka/netshoot> container, which ships with a lot of tools that are useful for troubleshooting or debugging networking issues.

1. Start a new container using the nicolaka/netshoot image. Make sure to connect it to the same network.

```
docker run -it --network todo-app nicolaka/netshoot
```

2. Use the dig command inside the container, which is a useful DNS tool - we're going to look up the IP address for the hostname mysql.

```
dig mysql
```

And you'll get an output like this...

```
; <<>> DiG 9.14.1 <<>> mysql
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 32162
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;mysql.             IN  A

;; ANSWER SECTION:
mysql.          600 IN  A   172.23.0.2

;; Query time: 0 msec
;; SERVER: 127.0.0.11#53(127.0.0.11)
;; WHEN: Tue Oct 01 23:47:24 UTC 2019
;; MSG SIZE  rcvd: 44
```

3. In the "ANSWER SECTION", you will see an A record for mysql that resolves to 172.23.0.2 (your IP address will most likely have a different value). While mysql isn't normally a valid hostname, Docker was able to resolve it to the IP address of the container that had that network alias (remember the --network-alias flag we used earlier?).

What this means is... our app only simply needs to connect to a host named mysql and it'll talk to the database! It doesn't get much simpler than that!

## Running the app with mysql

Useful article on env vars and why they should not be used in production. Currently at work we are saving env vars in circle ci and linking to them via variables.

<https://diogomonica.com/2017/03/27/why-you-shouldnt-use-env-variables-for-secret-data/>

1. set mysql environment variables.

* MYSQL_HOST

* MYSQL_USER
* MYSQL_PASSWORD
* MYSQL_DB

```
// remember the 3000 port needs to be clear
docker run -dp 3000:3000 \
  -w /app -v $PWD:/app \
  --network todo-app \
  -e MYSQL_HOST=mysql \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=secret \
  -e MYSQL_DB=todos \
  node:12-alpine \
  sh -c "yarn install && yarn run dev"
```

2. Docker logs the container 'docker logs <container-id>', we should see a message indicating it's using the mysql database.

```
$ nodemon src/index.js
[nodemon] 1.19.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] starting `node src/index.js`
Connected to mysql db at host mysql
Listening on port 3000
```

3. Add a few items to the todo list on your localhost 3000
4. Connect to mysql database and prove that the items have been written there.

```
docker exec -ti <mysql-container-id> mysql -p todos
```

and when in sql shell

```
select * from todo_items;

+--------------------------------------+--------------------+-----------+
| id                                   | name               | completed |
+--------------------------------------+--------------------+-----------+
| c906ff08-60e6-44e6-8f49-ed56a0853e85 | Do amazing things! |         0 |
| 2912a79e-8486-4bc3-a4c5-460793a575ab | Be awesome!        |         0 |
+--------------------------------------+--------------------+-----------+
```

5. BOOM!!!!! You have a persistent mysql database with two docker containers, one for the app, and another for mysql which is where the app saves its data! Awesome!

Basically there is a lot to do to start up an application

* create a network
* start containers
* specify the env vars
* expose the correct ports
* more

... 'Docker Compse' makes its easier.

---

# Docker Compose

1. Check that its installed already

```
docker-compose version
```

2. Install it if not.
3. Create a file called docker-compose.yml at the root of your app project.
4. Define the schema version - check versions and compatibility:
<https://docs.docker.com/compose/compose-file/>

```
version: "3.7"
```

5. Define the list of services (or containers)

```
version: "3.7"
services: 
```

6. Migrate the services created manually above into the compose file.

---

## Define the app service in docker-compose file

This was the command we used to define the app container.

```
docker run -dp 3000:3000 \
  -w /app -v $PWD:/app \
  --network todo-app \
  -e MYSQL_HOST=mysql \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=secret \
  -e MYSQL_DB=todos \
  node:12-alpine \
  sh -c "yarn install && yarn run dev"
```

1. Define the service entry (i.e. name - 'app') and image for the container. The name will automatically become a network alias, which will be useful with mysql connection.

```
version: "3.7"

services:
  app:
    image: node:12-alpine
```

2. There is no ordering, but 'command' often follows, recap that this command opens shell, installs and runs the image.

```
version: "3.7"

services:
  app:
    image: node:12-alpine
    command: sh -c "yarn install && yarn run dev"
```

3. Using short or long syntax for defining the ports for the service.
<https://docs.docker.com/compose/compose-file/#long-syntax-1>

```
version: "3.7"

services:
  app:
    image: node:12-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 3000:3000
```

4. Working directory and volume mapping.

```
// Next, we'll migrate both the working directory (-w /app) and the volume mapping (-v $PWD:/app) by using the working_dir and volumes definitions. Volumes also has a short https://docs.docker.com/compose/compose-file/#short-syntax-3 and long https://docs.docker.com/compose/compose-file/#long-syntax-3 syntax.

version: "3.7"

services:
  app:
    image: node:12-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 3000:3000
    working_dir: /app
    volumes:
      - ./:/app
```

5. Environment variables.

```
version: "3.7"

services:
  app:
    image: node:12-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 3000:3000
    working_dir: /app
    volumes:
      - ./:/app
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: secret
      MYSQL_DB: todos
```

6. Boom your done - the app container has been dockerised.

---

## Defining the mysql service

The command that was used:

```
docker run -d \
  --network todo-app --network-alias mysql \
  -v todo-mysql-data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=secret \
  -e MYSQL_DATABASE=todos \
  mysql:5.7
```

1. Define the new service and name it mysql so that it automatically gets the network alias.

```
version: "3.7"

services:
  app:
    # The app service definition
  mysql:
    image: mysql:5.7
```

2. Now define the volume mapping. When we ran the container with docker run, the named volume was created automatically. However, that doesn't happen when running with Compose. We need to define the volume in the top-level volumes: section and then specify the mount point in the service config. By simply providing only the volume name, the default options are used. There are many more options available though. <https://docs.docker.com/compose/compose-file/#volume-configuration-reference>

* i.e. we need to make a volume in the volumes: section (at the root level of the file) and then mount that volume where you need it in the services.

```
version: "3.7"

services:
  app:
    # The app service definition
  mysql:
    image: mysql:5.7
    volumes:
      // here are are using / mounting the todo-my-sql-data: volume
      - todo-mysql-data:/var/lib/mysql

volumes:
  // here we are creating the volume
  todo-mysql-data:
```

3. And then specify the environment variables

```
version: "3.7"

services:
  app:
    # The app service definition
  mysql:
    image: mysql:5.7
    volumes:
      - todo-mysql-data:/var/lib/mysql
    environment: 
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: todos

volumes:
  todo-mysql-data:
```

4. BOOM! Your done the docker-compose.yml file should look like:

```
version: "3.7"

services:
  app:
    image: node:12-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 3000:3000
    working_dir: /app
    volumes:
      - ./:/app
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: secret
      MYSQL_DB: todos

  mysql:
    image: mysql:5.7
    volumes:
      - todo-mysql-data:/var/lib/mysql
    environment: 
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: todos

volumes:
  todo-mysql-data:
```

## Running the application with docker compose

```shell
// check if there are any other running instances
docker ps

// cancel any running instances
docker rm -f <unwantedContainerID>

// start it up! (using -d flag to run it in the background)
docker-compose up -d
```

By default docker compose automatically creates a network specifically for the network stack, so we did not need to define one in the docker-compose file.

```shell
/// checkout the docker logs - this will show a single stream of all the services (-f follows the log - a live stream)
docker-compose logs -f
```

Notes

* docker dashboard - by default the project name is the name of the directory that the docker-compose.yml was located in, if you look in the project in docker dashboard the two containers names will follow the pattern of <project-name>_<service-name>_<replica-number>

```shell
// bring the project down
docker-compose down
```

---

##  Optimizing

Rather than download the same dependencies for each service, on a node.js project a file called package.json can assist by caching the dependencies.

Insert the package.json into the Dockerfile, to help support the caching of dependencies. Basically this says copy the contents of the package.json file into the project, then install them before you copy everything else in.
From (what it was):

```shell
FROM node:12-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "/app/src/index.js"]
```

To (what is should now be):

```shell
FROM node:12-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
CMD ["node", "/app/src/index.js"]
```

Build it again

```shell
docker build -t getting-started
```

This should now show 'Using cache' at some steps through the build - and it should build much quicker.

---

## Multi stage build

React Example
When building React applications, we need a Node environment to compile the JS code (typically JSX), SASS stylesheets, and more into static HTML, JS, and CSS. If we aren't doing server-side rendering, we don't even need a Node environment for our production build. Why not ship the static resources in a static nginx container?

```
FROM node:12 AS build
WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install
COPY public ./public
COPY src ./src
RUN yarn run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
```

Here, we are using a node:12 image to perform the build (maximizing layer caching) and then copying the output into an nginx container.
