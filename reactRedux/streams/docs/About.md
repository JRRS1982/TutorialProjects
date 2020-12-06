# About

The viewer will be able to see a number of streams that are currently being broadcast from one server, they will make a request to another server (RTMP - Real Time Messaging Protocol Server) to get their selected feed. The RTMP server acts like a controller, letting one server know what is live which in turn shows that list to the user and taking requests from the user.

`Mystream` Server
     - a simple api 
     - takes a list of what is live from the RTMP server.
     - tell the viewer what is live.

`RTMP` Server (Real Time Messaging Protocol Server) 
    - a simple api
    - tells Mystream server what is live 
    - takes requests from the viewer, for their selected feed. 

`Streamers Computer`
    - Uses OBS (Open Broadcaster Software) to record their action and sends the stream to RTMP

`Viewers Computer`
    - Via their internet browser they view a list of streams that are available on the Mystream server. 
    - Makes requests to get the stream they wish from the RTMP server.
