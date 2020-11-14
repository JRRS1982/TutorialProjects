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
  const [term, setTerm] = useState("example");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  /**
   * when a user types something update the term state and set a delay / setTimeout 
   * to update debouncedTerm, but, when a user types something (within the delay) 
   * cancel the previous timer and again immediately update term... and again set 
   * a timer to update the debounced term..... 
   * 
   * We need to "debounce" the request as there there are multiple things in the
   * second argument [term, result.length], therefore without a debouncedTerm the
   * term will change for each and a new request will be made for each.
   * 
   * i.e. we are updating term, but using debounced term to reduce requests to the
   * api
   */
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    // a cleanup function that clears the timer 
    return () => {
      clearTimeout(timerId);
    };
  /**
   * [term] here is the second argument to useEffect, it is what this useEffect function watches for changes.
   * 
   * this useEffect will run any time that term changes, and it it will set the 
   * debouncedTerm in one second... so debouncedTerm will not change straight away 
   * and that useEffect will not be triggered (for a second). When a change to debouncedTerm
   * is actually processed (after a second of waiting) the search will take place!
   * 
   * And thats a rap! the search will take place as the debouncedTerm has been updated
   * which is being watched by another useEffect, that will carry out a search if there
   * are any changes to that piece of state.
   * 
   * however both will run on the first render of the component
   */
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          // the query string for the above url which axios will append to the request
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm, // what we are searching for - the term piece of state
        },
      });
      setResults(data.query.search); // set the de-structured data value from the response of the call, to the results value on state
    };
    search();
  }, [debouncedTerm]); // [debouncedTerm] this is the second argument to the function, see the readme for more info
  
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
};;;;;;;

export default Search;
