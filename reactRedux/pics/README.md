# Picture Search (Pics)

### [Tech](#tech) | [Installation](#installation) | [Reflection](#reflection)

This is one of the projects from Stephen Griders Course on React, his stuff is great, all credit to him.

#### Problem: Input / Output

- Inputs: Text / a search term to the image search.
- Outputs: Images to the page related to that search term.

#### Acceptance Criteria

- Given the user types a term into the search field and presses enter
- When they look at the page
- Then they are able to see a number of images related to that search term.

### <a name="tech">Tech Stack</a>

* Javascript
* CSS
* React
* Axios
* Unsplash API

### API's Used

https://api.unsplash.com/ was used to provide images, and my key is in this project so don't over use it else i may have to create another account. In this case we are using it to return photos to us from a get request to search/photos endpoint.

1. Create a developer account.
2. Create 'application' on unsplash.
- add name of project
- take key / secret from the unsplash project and add to an env file in your code if you have one
- find the url you want to call / that will return what you want.
- use axios or a similar package to make a get / post request for the info you need.

### <a name="installation">Installation: how it works</a>

* clone the repo
* npm install
* add your own credentials to src/api/unsplash Authorization
* npm start 
* visit http://localhost:3000/
* enter details to the search box to make a request to unsplash and return a selection of images

### <a name="screenshots">Screenshots / UML / Notes / Diagrams</a>

Axios: How the request to Unsplash is made with Axios.

 ```
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: searchTerm }, // what we are searching for
      headers: {
        Authorization: "Client-ID exampleAccessKeyHere", // access key from unsplash
      },
    });
```

### <a name="reflection">Reflection and further development</a>

Great course, no further development required, but i may use some of the code elsewhere in the future and tidy up some of my chicken scratch notes. Would not have these in production project, but this is a tutorial piece.

### Credits / team members

Section 7,8,9 and 10. of Stephen Grider @ udemy.com/course/react-redux
