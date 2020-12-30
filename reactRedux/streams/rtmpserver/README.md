# Title: Real Time Messaging Protocol (RTMP) Server

A streamers computer provides a stream id to `RTMP server` on port 1935 and a `Viewers Browser` makes requests for streams to port 8000 on `RTMP server`. A web server will be told what streams are currently being broadcast by `RTMP server`. 

See [the stream/client/docs/architecture.png](streams/client/docs/architecture.png) image for more details.

## Table of contents
* [Setup](#setup)
* [Technology](#tech)
* [Screenshots](#screenshots)
* [Reflection and credits](#reflection)

<div id='setup'>

## Setup

Navigate to `./streams/rtmpserver`, then run the following in the terminal:

```
npm install
npm start
```

Then this api project should be running on local host port 8000 and listening to port 1935.

<div id='tech'>

## Technology

This project was created with:

- [node-media-server](https://github.com/illuspas/Node-Media-Server)
    - http-flv (node-media-server via flash video)

<div id='screenshots'>

## Screenshots 

Please see the `./docs/images` file for screenshots of the proejct running.

Please see the `./docs/OBS.md` file for notes on the OBS screen recording software.

<div id='reflection'>

## Reflection and ideas for future development

#### What did i learn?

- I have never used OBS or any streaming software before, so enjoyed exploring that.
- Loved starting a stream in OBS, (after setting up config) and having the stream feed through to the project.

#### What would i do differently?

- It is not a complicated project, but its all new to me, have not used flv.js, or node-media-server before and felt like this was just a copy and paste job into the index.js file which just required knowledge of what these packages do. Not my favourite project, but enjoyed seeing it tie things together.

#### Credits

- Stephen Grider React 2020 course
