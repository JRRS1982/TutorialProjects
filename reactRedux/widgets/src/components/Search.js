import React, { useState, useEffect } from "react";
import axios from "axios";

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
const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

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
    
    /**
     * if there is a search term, and there have been no results before it is 
     * the first search, therefore carry out the search straight away
     */
    if (term && !results.length) {
      search();
      
    /**
     * else create a timeout - or at least the id of a timeout, that we can use
     * later. setTimeout will create an id that we can cancel with clearTimeout,
     * and we will search() after a 1 second delay... if it is not cancelled.
     */
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000); // setTimeout to delay the search by 1 seconds
    
    /**
     * so currently the search will happen is the length of results is zero, or
     * after one second if there are results already. We are doing this to avoid
     * making api calls on every single key press in the search box. 
     * 
     * The component re-renders after every key press and timeout is cleared by
     * the clearTimeout function here. This function is THE SECOND ARGUMENT IN
     * THE USEEFFECT FUNCTION, IT IS NUTS... SEE THE README ABOUT IT. IT IS RUN
     * AFTER THE COMPONENT RE-RENDERS I.E. FIRST ON THE SECOND TIME THE COMPONENT
     * IS RENDERED, BUT SECOND ON THE FIRST TIME IT IS RENDERED.
    */
      return () => {
        clearTimeout(timeoutId); // clear the timeout above - the delay of the search.
      };
    }
  }, [term]); // the search term - see the formatting of the [], [term] parameter here is really important see the notes on useEffect

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="head">{result.title}</div>
          {/* dangerouslySetInnterHTML is bad and should not use for a professional project - only using as was part of the xss lesson */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
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
};;

export default Search;
