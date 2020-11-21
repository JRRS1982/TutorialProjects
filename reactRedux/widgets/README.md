# Widgets

This is a project from Stephen Griders React-Redux course that consists of a number of components that demonstrate various skills in React, Translate translates words to a foreign language using the Google API. Search make a call to the Wikipedia API.

### [Tech Stack](#tech) | [Reflection](#reflection) | [Installation](#installation)

## Components

App: The main component for this application

`Accordion:` Render a (React.Fragment) list of items which are of a dropdown type, manage activeIndex state to show or hide the content of the list item.

`Translate:` The parent class to Convert component, with options for language to convert to (value from google translate API). A dropdown with language options, and rendering the Convert component that is provided the text and language props that are provided by the user.

`Convert:` Associated to Translate in this instance, text and language props are provided, and an API call to google is made. One of the more complex components, as we do not wish to flood googles api with requests we are de-bouncing the request by creating two useEffect functions. The first has a delay on the update of text i.e. updates text after 500ms if text is not updated again in that time, if it is the component is re-rendered and clearTimeout is called to re-set the timer, if text has not changed in that time setDebouncedText is called with text and the second useEffect function is called - as debouncedText has been updated and the API is called and the setTranslated function is finally called and translated returned (to Translate component)

`Dropdown:` manage the clicking by a user, we add an event listener to the document.body that listens for a click event to take place outside of the component itself, without this we would not close the dropdown. We have to setSelected from the props

`Header:` Navigation for the application, reduce the calls that are made, we can pass in the components directly, but by doing so we are creating a mass of events for the rendering of every component all the time. Header is creating a place for a new component called Link which can manage Routes

`Link:` Sit inside the Header and manage the navigation, children param is the value of the element within the component where it is declared. We do not want to re-render the page on every click of the Link (its not necessary to re-render everything when we just want to dispatch an event) so we need to prevent default. However that causes issues as the url is therefore not going to be updated, so we pushState the href to the window to update that. We are also dispatching a popstate event, which will be picked up by the route component to inform it that the route has changed.

`Route:` Listen for a popstate event that will dispatch onLocationChange function and setCurrentPath to the pathname so the url and component that is rendered are aligned. Its being used just so that we can keep the currentPath up to date. It includes a cleanup function in useEffect that will remove this eventListener from the DOM if the component is removed.

`Search:` A de-bounced search that makes a request to the wikipedia API and displays the results, using some search params.


### <a name="Tech">Tech Stack</a>

* Javascript
* React
* React-router
* Wikipedia API
* Google Translate API

`API's Used`

* Wikipedia API
    * https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=EXAMPLESEARCHTERM
* Google Translate API - only works on localhost:3000 - using Stephen Griders api key, with his permission.
    * cloud.google.com/translate/docs

### <a name="installation">Installation: how it works</a>

```
git clone
npm install
npm start
```

Once installed find the project on:
- `http://localhost:3000/`
- `http://localhost:3000/list`
- `http://localhost:3000/dropdown`
- `http://localhost:3000/translate`

### <a name="reflection">Reflection and further development</a>

- What went well? 
Loved this project, has been great, React is so nice to work with. The teaching material has been the best i have found and the project has been fairly simple to put together, as a learning experience i feel that i have taken on a lot of what has been taught.

- What would i do differently? 
Create more projects and write less notes, would like my note taking to be more concise, but have found that the chicken scratch that i write all over the place has been a good reflection of what is being taught, so I am not sure that it is a bad thing in tutorial project where i am the only person working on it. Allows me to add reminders for future use where the knowledge is not fresh in my mind, but bad practice for professional projects. I dont think that its a bad thing where i am just trying to learn though... 

### Credits / team members

No contributions are required at this time, as this is a training exercise from Stephen Griders React-Redux course.
