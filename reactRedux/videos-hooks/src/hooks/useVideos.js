import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

/**
 * useVideos has been extracted from the App.js component, it is now a custom Hook, we did this to make the App component more readable by reducing the code in it and making this hook available for elsewhere in the application / elsewhere. 
 */
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  const search = async (defaultSearchTerm) => {
    // youtube is a pre-configured axios object, we are adding an endpoint to make the request to the youtube api, and specifying params that are required by youtube - and passing q (required param from Youtube) the term that we are wanting to search for. This is an async request as we will need to wait on a response from the api call.
    const response = await youtube.get("/search", {
      params: {
        q: defaultSearchTerm,
      },
    });
    setVideos(response.data.items);
  };

  /*
   * componentDidMount is a lifecycle method, that will be called once, when the component is first rendered, this useEffect has a [] empty, therefore will be called only once, when the component is first rendered. So this useEffect replaces that lifecycle component that would be available in a class based system.
   */
  useEffect(() => {
    search(defaultSearchTerm); // default search for the app.
  }, [defaultSearchTerm]);

  return [videos, search];
};

export default useVideos;
