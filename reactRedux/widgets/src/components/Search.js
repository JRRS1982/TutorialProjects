import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  /**
   * useEffect
   *
   * the first argument is going to be what is executed, and the second argument
   * is when the function is executed.
   *
   * the second argument that is provided, will be nothing, an empty array or an
   * array with a value within it.
   *
   * useEffect second argument
   *    - ...nothing... run at initial render and run after every re-render
   *    - ...[]... run only at initial render
   *    - ...[data]... run at initial render and run after every re-render IF data has changed (IN THE ARRAY) since last render
   *
   * nb useEffect cant be passed an async function i.e. useEffect(async () => {}) isnt allowed
   *    1. use a helper function i.e. 
   *  
   *  useEffect(() => {
        const search = async () => {
        await axios.get('exampleUrl');
        };
        search();
      }, [term]); 
  
        2. use a helper function and immediately invoke it.

        useEffect(() => {
          (async () => {
            await axios.get("exampleUrl");
          })();
        });
        
        3. use promises  - i.e. 'then'
        
        useEffect(() => {
          axios.get("exampleUrl").then((response) => {
          console.log(response.data);
        });
        }, [term]);

        Reacts preferred way of using async is option 1
   */

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          // the query string for the above url which axios will append to the request
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term, // what we are searching for - the term piece of state
        },
      });
      setResults(data.query.search); // set the de-structured data value from the response of the call, to the results value on state
    };
    if (term) {
      // the initial state of term is an empty state, we can add a default search or only carry out a search if there is a search term... i like not making a request unless we have a term.
      search();
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <div className="head">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
