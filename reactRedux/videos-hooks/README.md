# PROJECT NAME HERE XXXXXX 

### [User Stories](#user_story) | [Tech](#tech) | [Reflection](#reflection) | [Contact](#contact)

This is a video search project that comes from Stephen Griders React with Redux 2020 tutorial, starting on chapter 11.

There will be a page with a SearchBar, VideoDetail, VideoList adn VideoItem rendered on it. 

- SearchBar: where user input is gathered
- VideoList: where a list of videos is displayed - the response to the videos returned by the YouTube API.
- VideoItem: an item within the VideoList.
- VideoDetail: detail about the selected video.


#### Acceptance Criteria

Given i have entered a term into the applications search bar
When i click search
Then i am provided a list of items related to that search term on the page.

### <a name="Tech">Tech Stack</a>

* React
* Axios
* Youtube API
* Semantic-ui https://semantic-ui.com/

##### Code style

* 

##### APIs Used

* Youtube
- see apis/youtube.js, a public key is in use here, on the console.developers.google console, this key is permitted for use only from localhost:3000.
- https://developers.google.com/youtube/v3/docs/search/list#request
- GET https://www.googleapis.com/youtube/v3/search

### <a name="installation">Installation: how it works</a>

```
// in root of the project
npm install
npm start
// on web browser of your choice navigate to http://localhost:3000/
```

### <a name="screenshots"> UML / Screenshots / Documentation</a>

Should there be any UML / screenshots / documentation for the project, please find them in the 'images' folder of the 
project.

```
// install axios
npm install --save axios
```

### <a name="reflection">Reflection and further development</a>

What went well?
What would i do differently?

### Credits / team members

No contributions are required at this time, as this is a training exercise / tutorial project that i am completing to learn React.

https://www.udemy.com/course/react-redux/