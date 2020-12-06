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



--- 

## react-router

The core navigation library, this is not installed manually.

## react-router-dom

Naviation for dom based apps. This is the librrary that you would need to install if you wanted to work work. This is what you want when you are working with web applications. 

Simple example here of how it can be used - where PageOne and PageTwo are components that are displated to the dom if the url is '/' or pageTwo.

```

import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne}></Route>
          <Route path="/pageTwo" component={PageTwo}></Route>
        </div>
      </BrowserRouter>
    </div>
  )
};
```

`Error: This route is not defined`
The server for the below should always return a index.html page, and not worry about what appears after the hash or /, the pageOne or pageTwo elements shown below are dealt on the client side app, the server just sends the index.html page back and lets the client deal with it. TLDR: return a inded.html page from the server.

`BrowserRouter` element listens for changes to the url, the path property is what it is listening to, if it hears that route then it will return the component listed after the TLD (or port) as the 'path' i.e. pageOne in the below example. 
    - `localhost:3000/pageOne`
    - a request to an unknown url, will be directed to the development resources (src), if not found in there, the request will bubble up to the public folder, if not found in there create-react-app will return the index.html file. This is key, as a traditional application would return a 404 error not found, while React will return the index.html, and `IMPORTANT` the inde.html file contains Bundle.js (our JS) and in that there is a history object, adn BrowserRouter can use that to see the url and navigate to that url page. 
    - TLDR: Basically a server that employs BrowserRouter needs to return an index.html file.

`HashRouter` similar to BrowswerRouter, but will add and use everything after the # as the 'path' i.e. pageTwo will be a component that is declared in a <HashRouter>
    - `localhost:3000/#/pageTwo

`MemoryRouter` does not use the URL to track navigation. The URL will not update as you click and navigate around the application.

`exact` is limiting the matches, `exact changes the query to an equals from an contains path query`.

## react-router-native 

Navigation for react-native apps, ie mobile applications. 

## react-router-redux

Binding between redux and react-router, makes them work together. It is recommended that you do not use this library.