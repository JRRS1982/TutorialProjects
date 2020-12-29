# Real Time Messaging Protocol (RTMP) Server

## Package

- node-media-server (the video player)
- flv.js (get the video to appear on the screen)

This implements the npm `node-media-server` package.

https://github.com/illuspas/Node-Media-Server

https://github.com/illuspas/Node-Media-Server#accessing-the-live-stream

HLS && DASH are the modern formats of video streams, in this application we are using http-flv [flash video format](https://github.com/illuspas/Node-Media-Server#via-flvjs-over-http-flv)

`Streamers Computer` provides a stream id to `RTMP server` on port 1935 and a `Viewers Browser` makes requests for streams to port 8000 on `RTMP server`.

A web server will be told what streams are currently being broadcast by `RTMP server`. 
