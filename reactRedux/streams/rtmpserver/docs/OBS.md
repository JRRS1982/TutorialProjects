## OBS - creating a stream for usage in this project 

OBS is a popular screen recording and streaming application that can be set up as follows:

1. Create Scene
2. Add audio input source
3. Add display input source
4. Settings of OBS `Stream`
  - Service `Custom`
  - Server `rtmp://localhost/live`
  - Stream Key `1` the id of the stream that this is... basically when you start streaming on OBS, you are creating one of the streams we are going to view on the application. 
5. If the project is up and running, when you go to view the stream that has been created above, on `http://localhost:3000/streams/1` i.e. 1 as we started streaming with a Stream Key of 1, then you will see your own stream! The inital state of the video is paused, but once you click play it will show your input back to you with a slight delay!

https://github.com/illuspas/Node-Media-Server#accessing-the-live-stream

HLS && DASH are the modern formats of video streams, in this application we are using http-flv [flash video format](https://github.com/illuspas/Node-Media-Server#via-flvjs-over-http-flv)
