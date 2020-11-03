# Picture search

This project takes an input from the user, and returns a number of related images for that term to the UI.

1. How to get feedback from the user
2. How to fetch data from an outside service or API
3. How to show lists of records

### Unsplash API - Unsplash.com/developers

In this case we are using it to return photos to us from an API call to them.

1. Create a developer account.
2. Create application on unsplash.
  - add name of project
  - take key / secret from the unsplash project and add to an env file in your code if you have one
  - find the url you want to call / that will return what you want.
  - use axios or a similar package to make a get / post request for the info you need.

```
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: searchTerm }, // what we are searching for
      headers: {
        Authorization: "Client-ID exampleAccessKeyHere", // access key from unsplash
      },
    });
```
